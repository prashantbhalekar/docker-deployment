const express = require("express");

const app = express(express.json());

app.get("", (req, res) => {
  res.send("Deployment With Docker and Github Action - Testing!!!");
});

app.get("/json", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("/msg", (req, res) => {
  res.json({
    success: true,
    msg: "Hello There!",
  });
});

app.get("/msg1", (req, res) => {
  res.json({
    success: true,
    msg: "Hello There again!",
  });
});

app.listen("3000", () => {
  console.log("Server listening on port 3000");
});
