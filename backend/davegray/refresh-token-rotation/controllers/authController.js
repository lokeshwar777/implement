const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
    const cookies = req.cookies;
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
        const newRefreshToken = jwt.sign(
            {
                username: foundUser.username,
            },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "1d" }
        );

        let newRefreshTokenArray = !cookies?.jwt
            ? foundUser.refreshToken
            : foundUser.refreshToken.filter((rt) => rt !== cookies.jwt);

        if (cookies?.jwt) {
            /*
            1) users logs in but never uses refresh token and does not logout
            2) refresh token is stolen
            if(1&&2) reuse detection is needed to clear all the refresh tokens when user logs in
            */

            const refreshToken = cookies.jwt;
            const foundUser = await User.findOne({ refreshToken }).exec();

            // refresh token reuse detected
            if (!foundUser) {
                console.log("attempted refresh token reuse at login!");
                newRefreshTokenArray = [];
            }

            res.clearCookie("jwt", {
                httpOnly: true,
                // maxAge: 24 * 60 * 60 * 1000, // 1 day depricated so ignored
                // secure: true, // only serves on https
                sameSite: "None",
            });
        }

        // saving new refreshToken with current user
        foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
        const result = await foundUser.save();
        console.log("refresh token saved successfully", result);

        res.cookie("jwt", newRefreshToken, {
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
