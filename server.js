const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

// MongoDB connection URL
const url = "mongodb://localhost:27017";
const dbName = "resumeData";
const client = new MongoClient(url, { useUnifiedTopology: true });

app.get("/", async (req, res) => {
  try {
    // Connect to MongoDB
    await client.connect();
    const db = client.db(dbName);

    console.log("Connected successfully to MongoDB"); // console log
    res.send(`<h1>Connected successfully to MongoDB</h1>
                  <p>Using database: ${db.databaseName}</p>`);
  } catch (err) {
    console.error("Connection failed:", err);
    res.send(`<h1>Connection failed</h1><p>${err}</p>`);
  } finally {
    // Optional: keep the connection open if you plan CRUD operations
    // await client.close();
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
