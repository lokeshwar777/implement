const verifyRoles =
    (...allowedRoles) =>
    (req, res, next) => {
        if (!req?.roles) return res.sendStatus(401);
        const rolesArray = [...allowedRoles];
        // console.log(`Required "rolesArray" : ${rolesArray}`);
        // console.log(`Got "req.roles" : ${req.roles}`);
        const result = req.roles
            .map((role) => rolesArray.includes(role))
            .find((val) => val === true);
        if (!result) return res.sendStatus(401);
        next();
    };

module.exports = verifyRoles;
