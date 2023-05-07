"use strict";
const express = require("express");
const router = express.Router();
// const basicAuth = require("../middleware/basicAuth");
// const bearerAuth = require("../middleware/bearerAuth");

const { getAllForms, createForms } = require("../controllers/MasterFormController");
router.get("/masterform", getAllForms);
router.post("/masterform", createForms);


module.exports = router;
