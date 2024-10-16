import { Express } from "express";
import eventRouter from "./routes/events.route.js";
import { type Db } from "mongodb";

const routes = (app: Express, db: Db) => {
  app.use("api/events", eventRouter(db));
};

export default routes;
