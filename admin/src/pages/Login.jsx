import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Import Font Awesome icons
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";
import img from "../res/admin-img.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (email === "" || password === "") {
      alert("Email and password are mandatory.");
      return;
    }
    navigate("/main");
  };

  return (
    <div className="Login">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="input-container">
            <FaEnvelope className="icon" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="input-container">
            <FaLock className="icon" />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div>
          <input
            type="submit"
            value="Sign In"
            onClick={handleLogin}
            id="signinbtn"
          />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
