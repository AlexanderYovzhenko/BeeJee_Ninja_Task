import { Routes, Route } from 'react-router-dom';
import ToDoList from '../pages/todoList-page/ToDoList';
// import LoginPage from '../pages/login-page/LoginPage';
import Page404 from '../pages/page-404/Page404';

const AppRouter = () => {

  return (
    <Routes>
      <Route path="/" element={<ToDoList />} />
      {/* <Route path="/login" element={<LoginPage />} /> */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRouter;
