export const apiRequest = async (
    url = "",
    optionsObj = null,
    errMsg = null,
) => {
    try {
        const response = await fetch(url, optionsObj);
        if (!response.ok) throw new Error("Didn't receive data as expected!");
    } catch (err) {
        errMsg = err;
        console.log(errMsg);
    } finally {
        return errMsg;
    }
};
