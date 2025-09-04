// server.js

const express = require("express");
const app = express();
const PORT = 3000;

// Route: GET /api
app.get("/api", (req, res) => {
  res.json({ message: "API is running!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
