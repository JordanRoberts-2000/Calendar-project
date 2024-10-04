import express, { Request } from "express";

const app = express();

type User = {
  name: string;
  age: number;
};

// middleware
app.use(express.json());

app.get("/api/notes", (req, res) => {
  res.send("Hello, World!");
});

app.post("/api/notes", (req: Request<{}, {}, User>, res) => {
  const { name, age } = req.body;
  res.json({ message: `Hello, ${name}. You are ${age} years old.` });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
