const sequelize = require("../models/database/sequelize");

const getDbTables = async (req, res) => {
  try {
    await sequelize.authenticate();

    const [results] = await sequelize.query(`
      SELECT name FROM sqlite_master 
      WHERE type='table' AND name NOT LIKE 'sqlite_%'
      ORDER BY name;
    `);

    const tableNames = results.map(row => row.name);
    
    const dbTablesResponse = {
      database: "localDb.sqlite",
      tables: tableNames,
      count: tableNames.length
    };

    res.status(200).json(dbTablesResponse);
  } catch (error) {
    console.error("Database tables error:", error);
    
    const errorResponse = {
      database: "localDb.sqlite",
      tables: [],
      count: 0,
      error: "Failed to retrieve database tables"
    };

    res.status(500).json(errorResponse);
  }
};

module.exports = {
  getDbTables
};