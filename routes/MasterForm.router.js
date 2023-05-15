"use strict";
const express = require("express");
const router = express.Router();
// const basicAuth = require("../middleware/basicAuth");
// const bearerAuth = require("../middleware/bearerAuth");

const { getAllForms, createForms, deleteForms, updateForms} = require("../controllers/MasterFormController");
router.get("/masterform", getAllForms);
router.post("/masterform", createForms);
router.delete("/masterform/:id", deleteForms);
router.put("/masterform/:id", updateForms);


module.exports = router;
