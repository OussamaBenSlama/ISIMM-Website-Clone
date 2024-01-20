import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { useAuth } from './components/AuthContext'; 


function App() {
  const { isAuthenticated} = useAuth();
  return (
   
    <Router>
        <Routes>
        {isAuthenticated == false ? (
          <>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/*"  element={<Navigate to="/" />} />
          </>
        ) : 
        (
          <>
            <Route exact path="/*"  element={<Navigate to="/home" />} />
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/home" element={<Home/>} />
          </>
        )}
        </Routes>
    </Router>
  );
}

export default App;
