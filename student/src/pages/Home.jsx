// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext'; 
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Main/Navbar';
import Header from '../components/Main/Header'
import Form from '../components/Form/Form';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const student = location.state?.student
  const { isAuthenticated} = useAuth();

  return (
   <div style={{ position:'relative'}}>
     <div style={{ display: 'flex', position:'relative'}}>
        <Navbar/>
        <div style={{ width: '100%', flexBasis: '80%' }}>
          <Header/>
          {/* <ActualitesForm/> */} 
        </div>
    </div> 
    {isAuthenticated && student && student.first_check === false ? (
      <Form data = {student}/>
    ) : (
      null 
    )} 
   </div>
  );
};


export default Home;
