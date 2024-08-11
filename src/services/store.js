import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../task/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: taskSlice,
  },
});
