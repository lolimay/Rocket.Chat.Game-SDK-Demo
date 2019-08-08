const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 30030;

const corsOptions = {
  origin: ["http://localhost:1234", "http://localhost:3000"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post("/", function(req, res) {
  console.log(req.body);
});

app.get("/", function(req, res) {
  res.end(JSON.stringify({ success: true }));
  console.log(req.body);
});

app.listen(port);
