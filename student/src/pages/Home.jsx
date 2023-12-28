// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext'; 
import { useLocation } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const student = location.state?.student
  const { isAuthenticated} = useAuth();

  return (
    <div>
      {isAuthenticated && student && student.first_check === false ? (
        <div>Remplir le formulaire ci-dessous</div>
      ) : (
        null 
      )}
    </div>
  );
};


export default Home;
