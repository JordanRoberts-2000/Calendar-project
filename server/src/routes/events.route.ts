import { Response, Router, Request } from "express";
import logger from "../utils/logger.js";
import { Db } from "mongodb";

const eventRouter = (db: Db) => {
  const router = Router();

  // Example GET route
  router.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
  });

  // POST route that uses the db connection
  router.post("/", async (req: Request, res: Response) => {
    const { category, message, date } = req.body;

    logger.info("POST /api/events");
    try {
      await db.collection("events").insertOne({ category, message, date });
      res.sendStatus(201);
    } catch (error) {
      logger.error(`Failed to insert data in POST /api/events, err: ${error}`);
      res.sendStatus(500);
    }
  });

  return router;
};

export default eventRouter;
