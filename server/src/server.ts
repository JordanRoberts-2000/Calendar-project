import express, { Request } from "express";
import "dotenv/config";
import { connectToMongoDB, closeMongoDBConnection } from "./db.js";
import logger from "./utils/logger.js";
import gracefulShutdown from "./utils/gracefullShutdown.js";

const app = express();
const db = await connectToMongoDB("calendar_app");

type Event = {
  category: string;
  message: string;
  date: Date;
};

// middleware
app.use(express.json());

app.get("/api/events", (req, res) => {
  res.send("Hello, World!");
});

app.post("/api/events", async (req: Request<{}, {}, Event>, res) => {
  const { category, message, date } = req.body;
  // ZOD
  logger.info("POST /api/events");
  try {
    await db.collection("events").insertOne({ category, message, date });
    res.sendStatus(201);
  } catch (error) {
    // next(error); // Pass the error to the error-handling middleware
    logger.error(`failed to insert data in POST /api/events, err:${error}`);
    res.sendStatus(500);
  }
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});

server.on("error", (error: NodeJS.ErrnoException) => {
  if (error.code === "EADDRINUSE") {
    logger.error(`Port ${port} is in use`);
  } else {
    logger.error(error, `Failed to start server`);
  }
  gracefulShutdown();
});

// Listen for termination signals (Ctrl+C or kill commands)
process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);
