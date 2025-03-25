import { asyncHandler } from "../utils/asyncHandler";

const registerUser = asyncHandler(async (req, res) => {
    // get user details from frontend
    // validation - non empty
    // check if user already exits using username and email
    // check for images like avatar
    // upload them to cloudinary (images,...)
    // create user object and save it in DB
    // clear password and refresh token field from response
    // check for user creation
    // return response
});

export { registerUser };
