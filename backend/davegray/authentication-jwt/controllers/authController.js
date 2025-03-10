const usersDB = {
    users: require("../model/users.json"),
    setUsers: function (data) {
        this.users = data;
    },
};
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
require("dotenv").config();
const fsPromises = require("fs").promises;
const path = require("path");

const handleLogin = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password)
        return res
            .status(400)
            .json({ message: "Username and password are required!" });

    const foundUser = usersDB.users.find(
        (person) => person.username === username
    );

    if (!foundUser) return res.sendStatus(401); // unauthorized

    const match = bcrypt.compare(password, foundUser.password);

    if (match) {
        // create JWTs
        const accessToken = jwt.sign(
            {
                username: foundUser.username,
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "30s" }
        );
        const refreshToken = jwt.sign(
            {
                username: foundUser.username,
            },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "1d" }
        );

        // saving refreshToken with current user
        const otherUsers = usersDB.users.filter(
            (person) => person.username !== foundUser.username
        );
        const currentUser = { ...foundUser, refreshToken };
        usersDB.setUsers([...usersDB.users, currentUser]);
        await fsPromises.writeFile(
            path.join(__dirname, "..", "model", "users.json"),
            JSON.stringify(usersDB.users)
        );
        res.cookie("jwt", refreshToken, {
            httpOnly: true,
            // sameSite: "None",
            // secure: true,
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        });
        res.json({ accessToken });
    } else {
        return res.sendStatus(401); // unauthorized
    }
};

module.exports = { handleLogin };
