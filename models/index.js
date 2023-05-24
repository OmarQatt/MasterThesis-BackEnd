"use strict";
const { Sequelize, DataTypes } = require("sequelize");
const letter = require("./MasterForm");
require("dotenv").config();

const POSTGRES_URL =
  process.env.DATABASE_URL ||
  "postgresql://omar:0000@localhost:5432/postgres";

const sequelizeOption = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

const sequelize = new Sequelize(POSTGRES_URL 
    , sequelizeOption
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
