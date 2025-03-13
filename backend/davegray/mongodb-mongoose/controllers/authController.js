const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password)
        return res
            .status(400)
            .json({ message: "Username and password are required!" });

    const foundUser = await User.findOne({ username });

    if (!foundUser) return res.sendStatus(401); // unauthorized

    const match = bcrypt.compare(password, foundUser.password);
    if (match) {
        const roles = Object.values(foundUser.roles);
        // create JWTs
        const accessToken = jwt.sign(
            {
                UserInfo: {
                    username: foundUser.username,
                    roles: roles,
                },
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "300s" }
        );
        const refreshToken = jwt.sign(
            {
                username: foundUser.username,
            },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "1d" }
        );

        // saving refreshToken with current user
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
        console.log("refresh token saved successfully", result);

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
