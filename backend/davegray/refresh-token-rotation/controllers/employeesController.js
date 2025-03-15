const Employee = require("../model/Employee");

const getAllEmployees = async (req, res) => {
    const employees = await Employee.find();
    if (!employees)
        return res.status(204).json({ message: "No employees found" });
    res.json(employees);
};

const createNewEmployee = async (req, res) => {
    if (!req?.body?.firstname || !req?.body?.lastname) {
        return res
            .status(400)
            .json({ message: "First and last names are required" });
    }
    try {
        const result = await Employee.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
        });
        res.status(201).json({ success: true, message: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateEmployee = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ message: "ID param is required" });
    }
    try {
        const employee = await Employee.findOne({ _id: req.body.id }).exec();
        if (!employee) {
            return res
                .status(204)
                .json({ message: "No employee matches ID ${req.body.id}." });
        }
        if (req.body?.firstname) employee.firstname = req.body.firstname;
        if (req.body?.lastname) employee.lastname = req.body.lastname;
        const result = await employee.save();
        res.status(201).json({ success: true, message: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteEmployee = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ message: "ID param is required" });
    }
    try {
        const employee = await Employee.findOne({ _id: req.body.id }).exec();
        if (!employee) {
            return res
                .status(204)
                .json({ message: "No employee matches ID ${req.body.id}." });
        }
        const result = await employee.deleteOne({ _id: req.body.id });
        res.status(201).json({ success: true, message: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const getEmployee = async (req, res) => {
    try {
        if (!req?.params?.id) {
            return res.status(400).json({ message: "ID param is required" });
        }
        const employee = await Employee.findOne({ _id: req.params.id }).exec();
        if (!employee) {
            return res
                .status(204)
                .json({ message: "No employee matches ID ${req.params.id}." });
        }
        res.status(200).json({ success: true, message: employee });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee,
};
