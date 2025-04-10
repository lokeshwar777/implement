import { createSlice, nanoid } from "@reduxjs/toolkit";

const getTodosFromLocalStorage = () => {
    try {
        const serialisedState = localStorage.getItem("todos");
        return serialisedState ? JSON.parse(serialisedState) : [];
    } catch (error) {
        console.warn(error);
        return [];
    }
};

// const initialState = JSON.parse(localStorage.getItem("todos")) || [];
const initialState = getTodosFromLocalStorage();

const handleCreate = (state, action) => {
    // here state is nothing but todos
    const { title } = action.payload;
    if (!title) return state;
    const newTodo = {
        id: nanoid(),
        title,
        isCompleted: false,
    };

    // Mutate the state directly
    state.push(newTodo); // Stick to mutating for clarity and performance with Immer - GPT

    // (OR) Return a new state object/array
    // return [...state, { ...newTodo }];
};

// messy
// const handleEdit = (state, action) =>
//     state.todos.map((todo) =>
//         todo.id !== action?.payload?.id ? todo : { ...todo, action?.payload?.title }
//     );

// clean
const handleEdit = (todos, action) => {
    const { id, title } = action.payload;
    return todos.map((todo) => (todo.id !== id ? todo : { ...todo, title }));
};

const handleDelete = (todos, action) => {
    const { id } = action.payload;
    return todos.filter((todo) => todo.id !== id);
};

const handleToggleComplete = (todos, action) => {
    const { id } = action.payload;
    return todos.map((todo) =>
        todo.id !== id ? todo : { ...todo, isCompleted: !todo.isCompleted }
    );
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        createTodo: handleCreate,
        editTodo: handleEdit,
        deleteTodo: handleDelete,
        toggleTodoCompletion: handleToggleComplete,
    },
});

export const { createTodo, editTodo, deleteTodo, toggleTodoCompletion } =
    todoSlice.actions;

export default todoSlice.reducer;
