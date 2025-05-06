require('@dotenvx/dotenvx').config({
    path: '.env.test', // Path to your .env.test file
    expand: true, // If you want to expand variables within variables
});
