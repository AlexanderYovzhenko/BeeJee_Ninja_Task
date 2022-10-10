import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page404.scss';
import back from './assets/back.png';

function Page404() {
  const navigate = useNavigate();

  return (
    <div className="page404">
      <h2 className='error404'>404</h2>
      <button onClick={() => navigate(-1)}>
        <img width={26} src={back} alt="back" />
        {'go_back'}
      </button>
    </div>
  );
}

export default Page404;
