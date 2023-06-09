"use strict";
require("dotenv").config();
const server = require("./src/server");
const {db} = require("./models/index");

db.sync()
.then(() => {
  server.start(process.env.PORT || 4000);
})
.catch(console.error);



// db.sequelize.sync({ force: true }).then(() => {
//   startServer(process.env.PORT);
// });
