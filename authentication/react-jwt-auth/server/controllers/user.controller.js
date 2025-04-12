import User from "../models/user.model";

const registerUser = async (req, res) => {
    const {
        fullName,
        username,
        email,
        password,
        mobileNumber,
        bio,
        dateOfBirth,
        location,
    } = req.body;
    res.send("register");

    const missing = [];
    // check for input fields validity
    if (!fullName) missing.push("fullName");
    if (!username && !email) missing.push("username or email");
    if (!password) missing.push("password");

    if (missing.length) {
        res.status().json({
            success: false,
            message: `Missing input field(s) : ${missing.join(", ")}`,
        });
    }

    if (!username) username = email.find("@");

    // create user
    await User.create({
        fullName,
        username,
        email,
        password,
    });

    // create refresh token

    // issue verify token to email or phone number

    // login user and give user access
};

const loginUser = (req, res) => {
    const { username, email, password } = req.body;

    // login user
    // send access token
    res.send("login");
};

const logoutUser = (req, res) => {
    // get user from request

    // logout user
    res.send("logout");
};

export { loginUser, logoutUser, registerUser };
