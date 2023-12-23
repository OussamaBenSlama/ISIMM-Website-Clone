// PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Adjust the path accordingly

const PrivateRoute = ({Component}) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Component />: <Navigate to="/" />;
};

export default PrivateRoute;
