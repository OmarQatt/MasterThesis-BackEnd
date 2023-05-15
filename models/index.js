"use strict";
const { Sequelize, DataTypes, Op } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {});

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
