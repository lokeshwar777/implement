// TODO : Handle edge cases (missing fileds), lot of refactoring required!

// const data = {};
// data.employees = require("../data/employees.json");
const data = {
    employees: require("../data/employees.json"),
    setEmployees: function (data) {
        this.employees = data;
    },
};

const getAllEmployees = (req, res) => {
    res.json(data.employees);
};

const createNewEmployee = (req, res) => {
    try {
        const newData = [
            ...data.employees,
            req.body,
            // { firstname: req.body.firstname, lastname: req.body.lastname },
        ];
        data.employees = newData;
        res.status(201).json({ success: true, message: newData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateEmployee = (req, res) => {
    try {
        const newData = data.employees.filter(
            (employee) => employee.id != req.body.id
        );
        res.status(201).json({ success: true, message: newData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteEmployee = (req, res) => {
    try {
        const newData = data.employees.filter(
            (employee) => employee.id != req.body.id
        );
        res.status(201).json({ success: true, message: newData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const getEmployee = (req, res) => {
    const id = req.params.id;
    const user = data.employees.filter((item) => {
        // console.log(typeof item.id, typeof id, item.id == id);
        return item.id == id;
    });
    if (!user.length) {
        res.status(404).json({ success: false, message: "User Not Found" });
    } else {
        res.status(200).json({ success: true, message: user });
    }
};

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee,
};
