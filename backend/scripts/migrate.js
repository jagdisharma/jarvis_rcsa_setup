require('dotenv').config();
const { sequelize } = require('../src/config/database');
const logger = require('../src/utils/logger');

async function runMigrations() {
  try {
    logger.info('Starting database migrations...');
    
    // Test database connection
    await sequelize.authenticate();
    logger.info('Database connection established successfully');
    
    // Sync models (create tables)
    await sequelize.sync({ force: false });
    logger.info('Database synchronized successfully');
    
    logger.info('Migrations completed successfully');
    process.exit(0);
  } catch (error) {
    logger.error('Migration failed:', error);
    process.exit(1);
  }
}

runMigrations();