const employeeModel = require("../models/employeeModel");
const mongoose = require("mongoose");

// POST Method

const createEmployee = async (req,res) => {
    try {
        const {firstname, lastname, gender, dateofbirth, bloodgroup, maritalstatus, email,
    phonenumber, address, city, state, country, pincode, department, designation, jobtitle, 
    reportingmanager, joiningdate, employmenttype, worklocation, employeegrade,shift}=req.body;
        const employee = await employeeModel.create(
            {firstname, lastname, gender, dateofbirth, bloodgroup, maritalstatus, email,
    phonenumber, address, city, state, country, pincode, department, designation, jobtitle, 
    reportingmanager, joiningdate, employmenttype, worklocation, employeegrade,shift}
        )
        res.status(200).json(employee);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

// GET ALL Method

const getEmployee = async (req,res) => {
    try {
        const employees = await employeeModel.find({});
        res.status(200).json(employees);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

// GET By ID Method

const getSingleEmployee = async (req,res) => {
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:"Employee Not Found"})
        };
        try {
            const singleEmployee = await employeeModel.findById(id);
            res.status(200).json(singleEmployee);
        } catch (error) {
            res.status(400).json({error:error.message});
        }
};

// PATCH Method

const updateEmployee = async (req,res) => {
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:"Employee Not Found"})
        };
        try {
            const employee = await employeeModel.findByIdAndUpdate({
                _id:id,
            },
        {
            ...req.body,
        });
            res.status(200).json(employee);
        } catch (error) {
            res.status(400).json({error:error.message});
        }
};

// DELETE Method

const deleteEmployee = async (req,res) => {
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:"Employee Not Found"})
        };
        try {
            const employee = await employeeModel.findByIdAndDelete(id);
            res.status(200).json(employee);
        } catch (error) {
            res.status(400).json({error:error.message});
        }
};

module.exports = {createEmployee, getEmployee, getSingleEmployee, updateEmployee, deleteEmployee}