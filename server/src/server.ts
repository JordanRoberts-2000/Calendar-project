import express, { Request } from "express";
import "dotenv/config";
import { connectToMongoDB } from "./utils/db.js";
import logger from "./utils/logger.js";
import gracefulShutdown from "./utils/gracefullShutdown.js";
import routes from "./routes.js";

const app = express();

app.use(express.json());

const db = await connectToMongoDB("calendar_app");

routes(app, db);

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
