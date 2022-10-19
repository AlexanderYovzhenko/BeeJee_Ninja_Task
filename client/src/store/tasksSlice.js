import { createSlice } from '@reduxjs/toolkit';
import {
  addTask,
  getTasks,
  updateTask,
} from '../api/tasks';


const initialState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks(state, action) {
      state.tasks.push(action.payload.newTasks);
    },
  },
  extraReducers: {
    [getTasks.fulfilled.type]: (state, action) => {
      const { response } = action.payload;
      state.tasks = response;
    },
    [getTasks.pending.type]: (state) => {
    },
    [getTasks.rejected.type]: (state, action) => {
    },
    [addTask.fulfilled.type]: (state, action) => {
      const { response } = action.payload;
      state.tasks.push(response);
    },
    [addTask.pending.type]: (state) => {
    },
    [addTask.rejected.type]: (state, action) => {
    },
    [updateTask.fulfilled.type]: (state, action) => {
      const { response } = action.payload;
      state.tasks = state.tasks.map((task) => task.id === response.id ? response : task);
    },
    [updateTask.pending.type]: (state) => {
    },
    [updateTask.rejected.type]: (state, action) => {
    },
  },
});

export const { setTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
