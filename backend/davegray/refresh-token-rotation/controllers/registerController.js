const User = require("../model/User");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const handleNewUser = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password)
        return res
            .status(400)
            .json({ message: "Username and password are required!" });
    // check for duplicate usernames
    // const duplicate = await User.findOne({ username: username }).exec(); // or
    const duplicate = await User.findOne({ username }).exec();
    if (duplicate) return res.sendStatus(409); // conflict
    try {
        // encrypt the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        // create and store the new user
        // const newUser = new User();
        // newUser.username = username;
        // newUser.password = hashedPassword; // or
        // const newUser = new User({
        //     username: username,
        //     password: hashedPassword,
        // });
        // const result = await newUser.save(); // or
        const result = await User.create({
            username: username,
            password: hashedPassword,
        });
        console.log("result", result);
        res.status(201).json({ success: `New user ${username} created` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { handleNewUser };
