const initApp = () => {
    const dropArea = document.querySelector(".drop-area");
    const active = () => dropArea.classList.add("green-border");
    const inActive = () => dropArea.classList.remove("green-border");
    const prevents = (e) => e.preventDefault();
    const eventsArray = ["dragenter", "dragover", "dragleave", "drop"];
    eventsArray.forEach((eventName) => {
        dropArea.addEventListener(eventName, prevents);
    });

    ["dragenter", "dragover"].forEach((eventName) => {
        dropArea.addEventListener(eventName, active);
    });

    ["dragleave", "drop"].forEach((eventName) => {
        dropArea.addEventListener(eventName, inActive);
    });

    dropArea.addEventListener("drop", handleDrop);
};

document.addEventListener("DOMContentLoaded", initApp);

const handleDrop = (e) => {
    const dt = e.dataTransfer;
    const FilesList = dt.files;
    const filesArray = [...FilesList];
    console.log(FilesList);
    console.log(filesArray);
};
