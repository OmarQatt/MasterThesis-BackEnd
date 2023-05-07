"use strict";
const db=require('../models/index');
// const MasterForm=require('../models/MasterForm');

const getAllForms = async (req, res) => {
    try {
        const forms = await db.letterModel.findAll();
        res.status(200).json(forms);
    } catch (e) {
        res.status(500).json(e.message);
    }
    };

    const createForms = async (req, res) => {
        try {
            const data = {
                ...req.body,
            };
            const newForm = await db.letterModel.create(data);
    
            if (newForm) {
                res.status(201).json(newForm);
            }
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
   

    module.exports = { getAllForms, createForms };