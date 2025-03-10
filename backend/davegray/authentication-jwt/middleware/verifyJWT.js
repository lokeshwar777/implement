const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) return res.sendStatus(401);
    // console.log("authHeader", authHeader); // Bearer token
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
        if (error) return res.sendStatus(403); // invalid token - forbidden
        res.user = decoded.username;
        next();
    });
};

module.exports = verifyJWT;
