import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: new Date().getTime(),
        title: action.payload.title,
        content: action.payload.content,
        isCompleted: false,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      const id = action.payload.id;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    toggleStatus: (state, action) => {
      const id = action.payload.id;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
  },
});


const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

export default store;
export const todosAction = todoSlice.actions;

