import { createSlice } from '@reduxjs/toolkit';
import {
  getTasks,
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
  },
});

export const { changeColumnId, resetCreateNewTask, resetUpdateTask, setTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
