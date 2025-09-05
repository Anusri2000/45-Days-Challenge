const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ---- Hard-coded resume data ----
const projects = [
  {
    id: "p1",
    title: "DSA Progress Tracker",
    description:
      "Web app to log LeetCode practice and visualize topic-wise progress.",
    tech: ["Node.js", "Express", "MongoDB", "Chart.js"],
    repo: "https://github.com/yourname/dsa-tracker",
    live: "https://dsa-tracker.example.com",
  },
  {
    id: "p2",
    title: "Notion Study Hub Clone",
    description: "Lightweight Notion-like notes with tags and backlinks.",
    tech: ["React", "Vite", "Tailwind"],
    repo: "https://github.com/yourname/study-hub-clone",
    live: null,
  },
  {
    id: "p3",
    title: "Aptitude Practice API",
    description:
      "REST API serving aptitude & reasoning questions with difficulty filters.",
    tech: ["Node.js", "Express"],
    repo: "https://github.com/yourname/aptitude-api",
    live: null,
  },
];

const experience = [
  {
    id: "w1",
    role: "Software Engineering Intern",
    company: "Acme Corp",
    location: "Remote",
    start: "2024-06",
    end: "2024-08",
    highlights: [
      "Built internal API to aggregate analytics; reduced manual reporting by 80%.",
      "Wrote Jest tests increasing coverage from 42% to 78%.",
    ],
    tech: ["Node.js", "PostgreSQL", "Jest"],
  },
  {
    id: "w2",
    role: "Open Source Contributor",
    company: "Community",
    location: "Remote",
    start: "2024-10",
    end: "Present",
    highlights: [
      "Fixed performance bugs in markdown renderer.",
      "Improved docs; added examples for first-time contributors.",
    ],
    tech: ["JavaScript", "GitHub Actions"],
  },
];

// ---- Routes ----

// (optional) health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

// 1) GET /api/projects -> all projects (hard-coded)
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// 2) GET /api/experience -> all work experience (hard-coded)
app.get("/api/experience", (req, res) => {
  res.json(experience);
});

// 3) GET /api/projects/:id -> single project by ID (dynamic)
app.get("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  const project = projects.find((p) => String(p.id) === String(id));
  if (!project) {
    return res.status(404).json({ error: "Project not found", id });
  }
  res.json(project);
});

// Global 404 for unknown routes (nice to have)
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
