const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json());

const MONGO_URI = "mongodb://127.0.0.1:27017";
const DB_NAME = "myapp";

async function main() {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  console.log("✅ MongoDB connected");

  const db = client.db(DB_NAME);
  const projects = db.collection("projects");

  app.post("/api/projects", async (req, res) => {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({ error: "name and description required" });
    }
    const newProject = { name, description, createdAt: new Date() };
    const result = await projects.insertOne(newProject);
    newProject._id = result.insertedId;
    res.status(201).json(newProject);
  });

  app.get("/api/projects", async (req, res) => {
    const allProjects = await projects.find({}).toArray();
    res.json(allProjects);
  });

  app.listen(3000, () =>
    console.log("🚀 Server running on http://localhost:3000")
  );
}

main().catch(console.error);
