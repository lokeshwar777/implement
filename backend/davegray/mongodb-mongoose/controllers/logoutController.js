const User = require("../model/User");

const handleLogout = async (req, res) => {
    // on client, also delete the accessToken

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content
    const refreshToken = cookies.jwt;
    // console.log("refreshToken", refreshToken);

    // Is refreshToken in DB?
    const foundUser = await User.findOne({ refreshToken }).exec();

    if (!foundUser) {
        res.clearCookie("jwt", {
            httpOnly: true,
            // maxAge: 24 * 60 * 60 * 1000, // 1 day  - depricated so ignored
        });
        return res.sendStatus(403);
    }

    // delete refreshToken in DB
    foundUser.refreshToken = "";
    const result = await foundUser.save();
    console.log("refresh token deleted successfully", result);

    res.clearCookie("jwt", {
        httpOnly: true,
        // maxAge: 24 * 60 * 60 * 1000, // 1 day depricated so ignored
    }); // secure: true - only serves on https
    res.sendStatus(204); // all is well
};

module.exports = { handleLogout };
