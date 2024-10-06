import "dotenv/config";
import { MongoClient } from "mongodb";

let client: MongoClient | null = null;

const connectToMongoDB = async (dbName: string) => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw Error("Failed to get mongo uri from .env");

    client = await MongoClient.connect(uri);
    console.log("Connected to MongoDB");
    return client.db(dbName);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
};

const closeMongoDBConnection = async () => {
  if (client) {
    await client.close();
    console.log("MongoDB connection closed.");
  }
};

export { connectToMongoDB, closeMongoDBConnection };
