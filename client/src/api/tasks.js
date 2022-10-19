import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL_SERVER } from '../constants/queryVariables';

const getTasks = createAsyncThunk(
  'tasks/getAll',
  async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `${URL_SERVER}/tasks`,
      });

      return { response: response.data };
    } catch (e) {
      console.error(e);

    }
  }
);

const addTask = createAsyncThunk(
  'tasks/add',
  async () => {
    try {
      const response = await axios({
        method: 'post',
        url: `${URL_SERVER}/tasks`,
        data: { name: 'Alex', email: '124@gmail.com', description: 'Task one: create app on react', executed: false },
      });

      return { response: response.data };
    } catch (e) {
      console.error(e);
    }
  }
);

const updateTask = createAsyncThunk(
  'tasks/update',
  async (taskId) => {
    try {
      const response = await axios({
        method: 'put',
        url: `${URL_SERVER}/tasks?id=${taskId}`,
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        data: { name: 'Name', email: '124@gmail.com', description: 'Task one: create app on react', executed: true },
      });

      return { response: response.data };
    } catch (e) {
      console.error(e);
    }
  }
);

export {
  getTasks,
  addTask,
  updateTask,
};
