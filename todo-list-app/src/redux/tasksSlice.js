import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
let lastId = -1; // Helps increment new tasks with id

// Reducer Slice
export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add: (state, action) => {
      // Adds new task
      state.push({
        id: ++lastId,
        description: action.payload.description,
        status: action.payload.status,
        isEditing: false,
      });
    },
    del: (state, action) => {
      // Deletes the selected task
      state.splice(
        state.findIndex((task) => task.id === action.payload.id),
        1
      );
    },
    edit: (state, action) => {
      // Edit the selected task
      const task = state.find((task) => task.id === action.payload.id);
      if (task.isEditing) {
        task.isEditing = false;
        task.description = action.payload.description;
      } else {
        task.isEditing = true;
      }
    },
    status: (state, action) => {
      // Toggles the task between completed and not completed
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].status = !state[index].status;
    },
  },
});

// Export Reducer Slice
export const { add, del, edit, status } = tasksSlice.actions;
export default tasksSlice.reducer;
