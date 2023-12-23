import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { AuthProvider } from './components/AuthContext'; // Adjust the path accordingly
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home/" element={<PrivateRoute Component={Home} />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
