import express, { Request } from "express";
import "dotenv/config";
import { connectToMongoDB, closeMongoDBConnection } from "./db.js";

const app = express();
const db = await connectToMongoDB("calendar_app");

type User = {
  name: string;
  age: number;
};

// middleware
app.use(express.json());

app.get("/api/events", (req, res) => {
  res.send("Hello, World!");
});

app.post("/api/events", async (req: Request<{}, {}, User>, res) => {
  const { name, age } = req.body;
  // ZOD
  console.log("POST /api/events");
  try {
    await db.collection("events").insertOne({ name, age });
    res.sendStatus(201);
  } catch (error) {
    // next(error); // Pass the error to the error-handling middleware
    console.log(`failed to insert data in POST /api/events, err:${error}`);
    res.sendStatus(500);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const gracefulShutdown = async () => {
  console.log("Shutting down the server...");
  await closeMongoDBConnection();
  process.exit(0);
};

// Listen for termination signals (Ctrl+C or kill commands)
process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);
