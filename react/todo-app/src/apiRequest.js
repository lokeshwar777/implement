export const apiRequest = async (
    url = "",
    optionsObject = null,
    errorMessage = null,
) => {
    try {
        const response = await fetch(url, optionsObject);
        // if (!response.ok) throw Error("Please reload the app");
    } catch (error) {
        errorMessage = error.message;
        console.error(error);
    } finally {
        return errorMessage;
    }
};
