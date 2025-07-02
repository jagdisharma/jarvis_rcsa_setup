const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
const { sequelize } = require('./config/database');
const logger = require('./utils/logger');
require('./models/associations');

// Import routes
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');
const templateRoutes = require('./routes/templates');
const documentRoutes = require('./routes/documents');
const analysisRoutes = require('./routes/analysis');
const exportRoutes = require('./routes/export');
const processMaps = require('./routes/processMaps');
const definitionsRoutes = require('./routes/definitions');

const app = express();

// Security middleware
app.use(helmet());
app.use(compression());

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Body parsing middleware
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));
// Add request timeout middleware
app.use((req, res, next) => {
  // Set longer timeout for upload routes
  if (req.path.includes('/upload') || req.path.includes('/analysis')) {
    req.setTimeout(300000); // 5 minutes
    res.setTimeout(300000); // 5 minutes
  }
  next();
});

// Static files
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/templates', templateRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/analysis', analysisRoutes);
app.use('/api/export', exportRoutes);
app.use('/api/process-maps', processMaps);
app.use('/api/definitions', definitionsRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((error, req, res, next) => {
  logger.error('Unhandled error:', error);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5050;

// Database connection and server start
sequelize.authenticate()
  .then(() => {
    logger.info('Database connected successfully');
    return sequelize.sync({ alter: false }); // Don't auto-alter in production
  })
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`JARVIS RCSA Platform server running on port ${PORT}`);
    });
  })
  .catch(error => {
    logger.error('Unable to start server:', error);
    process.exit(1);
  });

module.exports = app;