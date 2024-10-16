import "dotenv/config";
import { MongoClient } from "mongodb";
import logger from "./utils/logger.js";

let client: MongoClient | null = null;

const connectToMongoDB = async (dbName: string) => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw Error("Failed to get mongo uri from .env");

    client = await MongoClient.connect(uri);
    logger.info("Connected to MongoDB");
    return client.db(dbName);
  } catch (error) {
    logger.error("Failed to connect to MongoDB:", error);
    throw error;
  }
};

const closeMongoDBConnection = async () => {
  if (client) {
    await client.close();
    logger.info("MongoDB connection closed.");
  }
};

export { connectToMongoDB, closeMongoDBConnection };
