import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    id: new Date().getTime(),
    title: "",
    content: "",
    isDone: false,
  },
  reducers: {
    setTodo: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTodo } = todoSlice.actions;
export default todoSlice.reducer;
