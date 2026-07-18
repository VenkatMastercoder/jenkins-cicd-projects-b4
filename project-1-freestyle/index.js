const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    project: "project-1-freestyle",
    message: "Welcome to Project 1 API",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    project: "project-1-freestyle",
    message: "Service is healthy",
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Project 1 API running on port ${PORT}`);
  });
}

module.exports = app;
