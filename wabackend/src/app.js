import express from "express";
import dotenv from "dotenv";

import homeRoutes from "./routes/home";
import wordsRoutes from "./routes/words";

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/words", wordsRoutes);
  }
}

export default new App().app;
