import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import tasksReducer, { tasksApi } from "./taskSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasksApi.middleware),
});

setupListeners(store.dispatch);