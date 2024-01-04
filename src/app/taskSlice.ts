import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "../types/Task";

const initialState = [
  {
    id: "1",
    status: "RUNNING",
    title: "Create Taskify application",
    description: "Initial code to showcase some features.",
  },
  {
    id: "2",
    status: "RUNNING",
    title: "Create GitHub repository",
    description: "Create repo and push code to it",
  },
];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<Task>) => {
      state.concat(action.payload);
    },
    move: (state, action: PayloadAction<{ id: string; status: string }>) => {
      const { id, status } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.status = status;
      }
    },
  },
});

export const { create, move } = taskSlice.actions;
export default taskSlice.reducer;
