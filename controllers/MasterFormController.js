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
    // check if studentNumber is already exist in the database
    const createForms = async (req, res) => {
        try {
            const data = {
                ...req.body,
            };
            const newForm = await db.letterModel.create(data);
            if(data.studentNumber)
            {
                res.status(409).json(e.message);
            }
            else{   
                res.status(201).json(newForm);
            }
            
    
            
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    const deleteForms = async (req, res) => {
        try {
            const id = req.params.id;
            const deletedForm = await db.letterModel.destroy({
                where: { id: id },
            });
            res.status(204).json(deletedForm);
        } catch (e) {
            res.status(500).json(e.message);
        }
    };
    const updateForms = async (req, res) => {
        try {
            const id = req.params.id;
            const data = {
                ...req.body,
            };
            const form = await db.letterModel.findOne({
                where: { id: id },
            });
            const updatedForm = await form.update(data);
            res.status(200).json(updatedForm);
        } catch (e) {
            res.status(500).json(e.message);
        }
    };
   
   

    module.exports = { getAllForms, createForms, deleteForms, updateForms};