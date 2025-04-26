const getCSRFToken = () =>
    document.querySelector("[name=csrfmiddlewaretoken]").value;

const headers = {
    "X-CSRFToken": getCSRFToken(),
    "Content-Type": "application/json",
};

async function handleToggle(todoId) {
    // selects the value of element having "csrfmiddlewaretoken" as the name attribute
    const csrfToken = document.querySelector(
        "[name=csrfmiddlewaretoken]"
    ).value;
    const headers = {
        "X-CSRFToken": csrfToken,
        "Content-Type": "application/json",
    };

    try {
        const response = await fetch(`toggle/${todoId}`, {
            method: "POST",
            headers,
        });

        const data = await response.json();
        const { completed } = data;

        const currentTodo = document.getElementById(todoId);
        // console.log("li", currentTodo);
        const checkbox = currentTodo.querySelector("[name=todo-completed]");
        checkbox.checked = completed;
        // console.log("checkbox", checkbox);
        const statusSpan = currentTodo.getElementsByTagName("span")[0];
        statusSpan.textContent = completed ? "Done" : "Pending";
        // statusSpan.className = `min-w-17 text-sm px-2 py-1 rounded ${
        //     data.completed
        //         ? "bg-green-100 text-green-700"
        //         : "bg-yellow-100 text-yellow-700"
        // }`;
        statusSpan.classList.remove(
            "bg-yellow-100",
            "text-yellow-700",
            "bg-green-100",
            "text-green-700"
        );

        if (data.completed) {
            statusSpan.classList.add("bg-green-100", "text-green-700");
        } else {
            statusSpan.classList.add("bg-yellow-100", "text-yellow-700");
        }
        // console.log(statusSpan);
    } catch (error) {
        console.log(`Error : ${error}`);
    }
}

async function handleDelete(todoId) {
    try {
        const response = await fetch(`delete/${todoId}`, {
            method: "DELETE",
            headers,
        });

        if (response.ok) {
            const targetedTodo = document.getElementById(todoId);
            // console.log("targetedTodo", targetedTodo);
            targetedTodo.remove();
        } else {
            console.error("Failed to delete todo");
        }
    } catch (error) {
        console.log(`Error : ${error}`);
    }
}

let isEditing = false;
function handleChange(titleElement, ImageElement) {
    isEditing = !isEditing;
    if (isEditing) {
        titleElement.attributes.removeNamedItem("readonly");
        titleElement.focus();
        titleElement.setSelectionRange(
            titleElement.value.length,
            titleElement.value.length
        ); // moves pointer to the end
    } else {
        titleElement.setAttribute("readonly", "");
    }

    ImageElement.alt = isEditing ? "save" : "edit";
    ImageElement.src = `/static/todoManager/images/${
        isEditing ? "save" : "edit"
    }.png`;
}

let currentTodo = null;
let todoTitle = null;
let editImage = null;
let previousTitle = "";

function handleOutsideClick(e) {
    // console.log("handleOutsideClick called");
    if (currentTodo && !currentTodo.contains(e.target)) {
        // console.log("outside", currentTodo);
        todoTitle.value = previousTitle;
        handleChange(todoTitle, editImage);
        currentTodo = null;
        document.removeEventListener("click", handleOutsideClick);
        // console.log("handleOutsideClick removed");
    }
}

async function toggleEdit(e, { todoId, existingTitle }) {
    handleOutsideClick(e);
    previousTitle = existingTitle;
    // console.log("edit clikced");
    currentTodo = document.getElementById(todoId);
    // console.log("li", currentTodo);

    todoTitle = currentTodo.querySelector("[name=todo-title]");
    // console.dir(todoTitle);

    editImage = currentTodo.querySelector("[name=edit-todo]");
    // console.log("editImage", editImage);

    handleChange(todoTitle, editImage);

    // if editing is completed then save
    if (!isEditing) await handleUpdate(todoTitle.value, todoId);

    // 'blur' event is only for focusable elements like input
    document.addEventListener("click", handleOutsideClick);
}

async function handleUpdate(newTitle, todoId) {
    try {
        const response = await fetch(`update/${todoId}`, {
            method: "POST",
            headers,
            body: JSON.stringify({ newTitle }),
        });

        if (!response.ok) {
            throw new Error("Failed to update todo");
        }
    } catch (error) {
        console.log(`Error : ${error}`);
    }
}
