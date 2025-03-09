// cross origin resource sharing
const whitelist = [
    "https://www.google.com",
    "http://127.0.0.1:5500",
    "http://localhost:8080",
];

// you might get origin as undefined in dev env, so use !origin
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    optionsSuccessStatus: 200,
};

module.exports = corsOptions;
