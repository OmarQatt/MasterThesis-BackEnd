"use strict";
const { Sequelize, DataTypes, Op } = require("sequelize");
require("dotenv").config();

const POSTGRES_URL = process.env.DATABASE_URL || process.env.DATABASE_LOCAL


const sequelizeOption = {
     dialectOptions: {
       ssl: {
         require: true,
         rejectUnauthorized: false,
       },
     },
  };
  
let sequelize = new Sequelize(POSTGRES_URL, sequelizeOption);

sequelize.authenticate().then(() => {
  console.log('Database connected to postgres');
}).catch((err) => {
  console.log(err)
});
const db = {};
db.sequelize = sequelize;
db.Op = Op;

// models

// db.userModel = require("./user.model")(sequelize, DataTypes);
db.letterModel = require("./MasterForm")(sequelize, DataTypes);

// relation

// db.userModel.hasMany(db.letterModel, { foreignKey: "userId", sourceKey: "id" });
// db.letterModel.belongsTo(db.userModel, { foreignKey: "userId", targetKey: "id" });


module.exports = db;
