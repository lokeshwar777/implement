// const asyncHandler = () => {}; // Higher order function
// const asyncHandler = (fn) => () => {};
// const asyncHandler = (fn) => async () => {};

// try-catch async/await
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message,
//         });
//     }
// };

// promises
const asyncHandler = (reqestHandler) => {
    (req, res, next) => {
        Promise.resolve(
            reqestHandler(req, res, next).catch((err) => next(err))
        );
    };
};

export { asyncHandler };
