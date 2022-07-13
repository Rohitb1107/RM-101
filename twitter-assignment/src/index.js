const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.listen(8080, async () => {
  try {
    await connect();
    console.log("listen port 8080");
  } catch (error) {
    console.log(error.message);
  }
});
