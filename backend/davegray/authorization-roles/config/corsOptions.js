const allowedOrigins = require("./allowedOrigins");

// cross origin resource sharing
// you might get origin as undefined in dev env, so use !origin
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    optionsSuccessStatus: 200,
};

module.exports = corsOptions;
