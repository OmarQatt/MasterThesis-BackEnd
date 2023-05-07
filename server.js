"use strict";
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/user.router");
const handlNotFound = require("./error-handlers/404");
const handlError = require("./error-handlers/500");
const MasterLetter = require("./routes/MasterForm.router");

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(MasterLetter)




app.get("/", (req, res) => {
  res.send("Hello World!");
});

function startServer(port) {
  app.listen(port, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Server is running on port ${port}`);
  });
}

app.use("*", handlNotFound);
app.use(handlError);
module.exports = { startServer, app };
