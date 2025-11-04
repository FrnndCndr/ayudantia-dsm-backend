require('dotenv').config();

const express = require("express");
const cors    = require("cors");
const logger  = require("morgan");
const path    = require("path");
const sequelize = require("./database/sequelize");
const authRoutes = require("../routes/auth/auth.routes");
const productRoutes = require("../routes/product/product.routes");
const songRoutes = require("../routes/song/song.routes");

class Server {
  constructor() {
    console.log("Iniciando Server class");
    this.app  = express();
    this.port = process.env.PORT || 7070;
    this.startTime = Date.now();
    this.paths = {
      auth: "/api/auth",
      products: "/api/products",
      songs: "/songs",
    };

    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await sequelize.authenticate();
      console.log("Database connected successfully (SQLite)");
    } catch (error) {
      console.error(error);
      throw new Error("Error connecting to the database");
    }
  }

  middlewares() {
    this.app.use(logger("dev"));
    this.app.use(express.json());
    this.app.use(
      cors({
        origin: process.env.CORS_ORIGIN || "*",
        credentials: true,
      })
    );
    this.app.use(express.static("public"));
    this.app.use("/uploads", express.static(path.join(__dirname, "../../uploads")));
  }

  routes() {
    this.app.use(this.paths.auth, authRoutes);
    this.app.use(this.paths.products, productRoutes);
    this.app.use(this.paths.songs, songRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

module.exports = Server;
