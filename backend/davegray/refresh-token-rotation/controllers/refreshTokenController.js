const User = require("../model/User");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401); // unauthorized
    const refreshToken = cookies.jwt;
    // console.log("refreshToken", refreshToken);
    res.clearCookie("jwt", {
        httpOnly: true,
        // maxAge: 24 * 60 * 60 * 1000, // 1 day depricated so ignored
        // secure: true, // only serves on https
        sameSite: "None",
    });

    const foundUser = await User.findOne({ refreshToken }).exec();

    // detected refresh token reuse
    if (!foundUser) {
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            async (error, decoded) => {
                if (error) return res.sendStatus(403); // fobidden
                const hackedUser = await User.findOne({
                    username: decoded.username,
                }).exec();
                hackedUser.refreshToken = [];
                const result = await hackedUser.save();
                console.log("cleared refresh tokens", result);
            }
        );
        return res.sendStatus(403); // fobidden
    }

    const newRefreshTokenArray = foundUser.refreshToken.filter(
        (rt) => rt !== refreshToken
    );

    // evaluate jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        async (error, decoded) => {
            if (error) {
                foundUser.refreshToken = [...newRefreshTokenArray];
                const result = await foundUser.save();
                console.log("refesh token expired", result);
            }
            if (foundUser.username !== decoded.username)
                return res.sendStatus(403); //forbidden

            // refresh token is still valid
            const roles = Object.values(foundUser.roles);
            const accessToken = jwt.sign(
                {
                    UserInfo: {
                        username: decoded.username,
                        roles: roles,
                    },
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "300s" } // only for dev
            );

            const newRefreshToken = jwt.sign(
                {
                    username: foundUser.username,
                },
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: "1d" }
            );

            // saving refreshToken with current user
            foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
            const result = await foundUser.save();

            res.cookie("jwt", refreshToken, {
                httpOnly: true,
                // sameSite: "None",
                // secure: true,
                maxAge: 24 * 60 * 60 * 1000, // 1 day
            });

            res.json({ accessToken });
        }
    );
};

module.exports = { handleRefreshToken };
