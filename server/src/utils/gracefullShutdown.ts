import { closeMongoDBConnection } from "../db.js";
import logger from "./logger.js";

const gracefulShutdown = async () => {
  try {
    logger.info("Shutting down the server...");
    await closeMongoDBConnection();
    logger.info("Server shut down gracefully.");
    process.exit(0);
  } catch (err) {
    logger.error("Error during shutdown: ", err);
    process.exit(1);
  }
};

export default gracefulShutdown;
