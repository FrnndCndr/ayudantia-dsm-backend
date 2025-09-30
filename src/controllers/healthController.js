const sequelize = require("../models/database/sequelize");

const getHealthStatus = async (req, res) => {
  try {
    const startTime = process.hrtime();
    let dbStatus = {
      connected: false,
      host: "localhost",
      name: "localDb.sqlite"
    };

    try {
      await sequelize.authenticate();
      dbStatus.connected = true;
    } catch (error) {
      console.error("Database connection error:", error);
      dbStatus.connected = false;
    }

    const healthResponse = {
      ok: true,
      message: "API running successfully",
      port: process.env.PORT || 3000,
      uptime: process.uptime(),
      db: dbStatus
    };

    res.status(200).json(healthResponse);
  } catch (error) {
    console.error("Health check error:", error);
    
    const errorResponse = {
      ok: false,
      message: "Health check failed",
      port: process.env.PORT || 3000,
      uptime: process.uptime(),
      db: false
    };

    res.status(500).json(errorResponse);
  }
};

module.exports = {
  getHealthStatus
};