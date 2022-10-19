import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, getTasks } from "../../api/tasks";
import Task from "../../components/Task/Task";


const ToDoList = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <div className="ToDoList">
      {tasks.map((task, index) => {
        return <Task key={index}/>
      })
      }
      <button className="button-add-task" onClick={()=> dispatch(addTask())}>Добавить задачу</button>
    </div>
  );
};

export default ToDoList;
