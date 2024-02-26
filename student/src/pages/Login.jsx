// Login.js
import React, { useState } from "react";
import './styles/Login.css';
import { useNavigate } from "react-router-dom";
import {useAuth} from '../components/AuthContext'
import { useUserContext } from "../components/global/User";


const Login = () => {
  const { isAuthenticated, login } = useAuth();
  const { user, setUser } = useUserContext();
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  
  const handleLogin = async (e) => {
    console.log(email,password)
    e.preventDefault(); 
    try {
      const response = await fetch('http://127.0.0.1:8000/students/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
         login(); // Update authentication state
         
         // console.log(user)
         setUser(data)
         navigate('/home', {state:{'student' : data}})
      } else {
        
         setError(data.error || 'Invalid email or password');
        console.log(data.error);
         window.alert(error);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login');
    }
  };

  return (
    <div className="Login">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            placeholder="Password"
          />
          <input 
            type="submit" 
            value="Sign In"
            onClick={(e) => handleLogin(e)}
            id="signinbtn"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
