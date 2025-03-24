const path = require("path");

const fileExtLimiter = (allowedExtArray) => (req, res, next) => {
    const files = req.files;

    const fileExtensions = [];
    Object.keys(files).forEach((key) => {
        fileExtensions.push(path.extname(files[key].name));
    });

    const allowed = fileExtensions.every((ext) =>
        allowedExtArray.includes(ext)
    );

    if (!allowed) {
        const message =
            `Upload failed. Only ${allowedExtArray.toString()} files allowed`.replaceAll(
                ",",
                ", "
            );

        return res.status(422).json({ status: "Error", message }); // 422 - Unprocessable entity
    }

    next();
};

module.exports = fileExtLimiter;
