import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  completeTasks: [],
  activeTasks: [],
  status: "all",
  length: 0,
  theme: "dark",
};

export const taskSlice = createSlice({
  name: "Tasks",
  initialState,
  reducers: {
    createTask(state, action) {
      state.status = "loading";
      state.tasks = [...state.tasks, action.payload];
      state.length = state.tasks.length;
      state.status = "all";
    },

    completeTask(state, action) {
      state.status = "all";

      const task = current(state.tasks).filter(
        (item) => item.id === action.payload
      );

      const tasks = current(state.tasks).filter(
        (item) => item.id !== action.payload
      );

      const uptadeTask = { ...task[0], isCompleted: !task[0].isCompleted };

      state.tasks = [...tasks, uptadeTask];
    },

    deleteTask(state, action) {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
      state.activeTasks = state.tasks.filter((item) => !item.isCompleted);
      state.completeTasks = state.tasks.filter((item) => item.isCompleted);
      if (state.status === "active") {
        state.length = state.activeTasks.length;
      } else if (state.status === "completed") {
        state.length = state.completeTasks.length;
      } else if (state.status === "all") {
        state.length = state.tasks.length;
      }
    },

    operationsTasks(state, action) {
      if (action.payload === "active") {
        state.activeTasks = state.tasks.filter((item) => !item.isCompleted);
        state.length = state.activeTasks.length;
      } else if (action.payload === "completed") {
        state.completeTasks = state.tasks.filter((item) => item.isCompleted);

        state.length = state.completeTasks.length;
      } else if (action.payload === "all") {
        state.length = state.tasks.length;
      }
      state.status = action.payload;
    },

    clearCompleted(state) {
      state.tasks = current(state.activeTasks);
      state.status = "all";
      state.length = current(state.activeTasks).length;
      state.completeTasks = [];
    },

    changeTheme(state, action) {
      if (action.payload) state.theme = "light";
      if (!action.payload) state.theme = "dark";
    },
  },
});

export const {
  createTask,
  completeTask,
  removeTask,
  clearCompleted,
  deleteTask,
  operationsTasks,
  changeTheme,
} = taskSlice.actions;

export default taskSlice.reducer;
