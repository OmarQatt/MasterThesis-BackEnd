"use strict";
const { Sequelize, DataTypes } = require("sequelize");
const letter = require("./MasterForm");
require("dotenv").config();

// const { Pool } = require("pg");
// const pool = new Pool({
//     connectionString: process.env.POSTGRES_URL + "?sslmode=require",
//   })
//   pool.connect((err) => {
//     if (err) throw err;
//     console.log("Connected to PostgresSQL");
//   })
const POSTGRES_URL = 
  process.env.POSTGRES_URL + "?sslmode=require" 
//   ||
//   "postgresql://omar:0000@localhost:5432/postgres";

// const sequelizeOption = {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// };

const sequelize = new Sequelize(POSTGRES_URL 
    // , sequelizeOption
    );

// models

// db.userModel = require("./user.model")(sequelize, DataTypes);
const letterModel = letter(sequelize, DataTypes);

// relation

// db.userModel.hasMany(db.letterModel, { foreignKey: "userId", sourceKey: "id" });
// db.letterModel.belongsTo(db.userModel, { foreignKey: "userId", targetKey: "id" });


module.exports = {
    db: sequelize,
    letterModel: letterModel,
};
