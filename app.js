const express = require("express");
const path = require("path");
const port = process.env.PORT || 1337;
const app = express();

app.listen(port, () => {
  console.log("Server started at port: http://localhost:" + port);
});