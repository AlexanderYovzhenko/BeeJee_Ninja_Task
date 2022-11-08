import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from '../../api/tasks';

const Task = (props) => {
  const dispatch = useDispatch();
  const { task } = props;

  return (
    <div className='Task'>
      {task.id}
      <h1>{task.name}</h1>
      <h2>{task.email}</h2>
      <p>{task.description}</p>
      <p>{task.executed ? "true" : "false"}</p>
      <button className="button-update-task" onClick={()=> dispatch(updateTask(task.id))}>Редактировать задачу</button>
    </div>
  );
};

export default Task;
