const express = require("express");
var path = require('path');

const app = express();
const port = 9000;

app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname + "/resources/index.html"));
  res.send({message: "Server is running well"});
});

app.listen(port, () => {
  console.log("App initialized successfully and is running on port: " + port);
});
