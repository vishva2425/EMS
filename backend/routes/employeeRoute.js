const express = require("express");
const {createEmployee, getEmployee, getSingleEmployee, updateEmployee, deleteEmployee} = require("../controllers/employeeController");
const router = express.Router();

router.post("/", createEmployee);
router.get("/", getEmployee)
router.get("/:id", getSingleEmployee)
router.patch("/:id", updateEmployee)
router.delete("/:id", deleteEmployee)

module.exports = router;