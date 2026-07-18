const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;
const HOST = "0.0.0.0";

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    project: "project-1-freestyles",
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
  app.listen(PORT, HOST, () => {
    console.log(`Project 1 API running at http://${HOST}:${PORT}`);
  });
}

module.exports = app;
