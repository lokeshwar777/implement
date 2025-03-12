const usersDB = {
    users: require("../model/users.json"),
    setUsers: function (data) {
        this.users = data;
    },
};
const fsPromises = require("fs").promises;
const path = require("path");

const handleLogout = async (req, res) => {
    // on client, also delete the accessToken

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content
    const refreshToken = cookies.jwt;
    // console.log("refreshToken", refreshToken);

    // Is refreshToken in DB?
    const foundUser = usersDB.users.find(
        (person) => person.refreshToken === refreshToken
    );

    if (!foundUser) {
        res.clearCookie("jwt", {
            httpOnly: true,
            // maxAge: 24 * 60 * 60 * 1000, // 1 day  - depricated so ignored
        });
        return res.sendStatus(403);
    }

    // delete refreshToken in DB
    const otherUsers = usersDB.users.filter(
        (person) => person.refreshToken !== refreshToken
    );
    const currentUser = { ...foundUser, refreshToken: "" };
    usersDB.setUsers([...usersDB.users, currentUser]);
    await fsPromises.writeFile(
        path.join(__dirname, "..", "model", "users.json"),
        JSON.stringify(usersDB.users)
    );

    res.clearCookie("jwt", {
        httpOnly: true,
        // maxAge: 24 * 60 * 60 * 1000, // 1 day depricated so ignored
    }); // secure: true - only serves on https
    res.sendStatus(204); // all is well
};

module.exports = { handleLogout };
