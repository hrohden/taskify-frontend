import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Status } from "../types/Status";
import { Task } from "../types/Task";
import { UpdateTaskStatus } from "../types/update-task-status";

const initialState: Task[] = [];

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Task"],
  endpoints: (builder) => ({
    getAllTasks: builder.query<Task[], void>({
      query: () => ({
        url: "/tasks",
        method: "GET",
      }),
      providesTags: ["Task"],
    }),
    getAllStatus: builder.query<Status[], void>({
      query: () => ({
        url: "/status",
        method: "GET",
      }),
    }),
    updateTaskStatus: builder.mutation<Task, UpdateTaskStatus>({
      query: ({ id, statusId }) => ({
        url: `/tasks/${id}`,
        method: "POST",
        body: { id, statusId },
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<Task>) => {
      state.concat(action.payload);
    },
    move: (state, action: PayloadAction<{ id: string; status: Status }>) => {
      const { id, status } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.status = status;
      }
    },
  },
});

export const { create, move } = taskSlice.actions;
export const {
  useGetAllTasksQuery,
  useUpdateTaskStatusMutation,
  useGetAllStatusQuery,
} = tasksApi;
export default taskSlice.reducer;
