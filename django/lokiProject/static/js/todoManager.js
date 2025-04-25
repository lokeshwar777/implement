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
        const checkbox = currentTodo.querySelector("[name=completed]");
        checkbox.checked = completed;
        // console.log("checkbox", checkbox);
        const statusSpan = currentTodo.getElementsByTagName("span")[0];
        statusSpan.textContent = completed ? "Done" : "Pending";
        statusSpan.className = data.completed
            ? "text-sm px-2 py-1 rounded bg-green-100 text-green-700"
            : "text-sm px-2 py-1 rounded bg-yellow-100 text-yellow-700";
        // console.log(statusSpan);
    } catch (error) {
        console.log(`Error : ${error}`);
    }
}

async function handleDelete(todoId) {
    const csrfToken = document.querySelector(
        "[name=csrfmiddlewaretoken]"
    ).value;
    const headers = {
        "X-CSRFToken": csrfToken,
        "Content-Type": "application/json",
    };

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
