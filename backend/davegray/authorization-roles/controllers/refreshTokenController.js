const usersDB = {
    users: require("../model/users.json"),
    setUsers: function (data) {
        this.users = data;
    },
};
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401); // unauthorized
    const refreshToken = cookies.jwt;
    // console.log("refreshToken", refreshToken);

    const foundUser = usersDB.users.find(
        (person) => person.refreshToken === refreshToken
    );

    if (!foundUser) return res.sendStatus(403); // fobidden

    // evaluate jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (error, decoded) => {
            if (error || foundUser.username !== decoded.username)
                return res.sendStatus(403); //forbidden
            const roles = Object.values(foundUser.roles);
            const accessToken = jwt.sign(
                {
                    UserInfo: {
                        username: decoded.username,
                        roles: roles,
                    },
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "30s" } // only for dev
            );
            res.json({ accessToken });
        }
    );
};

module.exports = { handleRefreshToken };
