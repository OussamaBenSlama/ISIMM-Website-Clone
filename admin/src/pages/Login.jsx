// Login.js
import React, { useState } from "react";
import './styles/Login.css'
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = async () => {
    if (email === "" || password === "") {
      alert("Email and password are mandatory.");
      return;
    }
    navigate('/main')

   
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
                onClick={handleLogin}
                id="signinbtn"
            />
          </form>
        </div>
      </div>
    
  );
};

export default Login;