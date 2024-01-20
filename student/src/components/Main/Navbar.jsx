import React from 'react'
import './styles/Navbar.css'
import {faNewspaper} from '@fortawesome/free-solid-svg-icons';
import NavItem from './NavItem';
import { useNavigate } from "react-router-dom";


   
const Navbar = () => {
  const navigate = useNavigate();
 
  const goToMain = () => {
    navigate('/home');
  };
  return (
    <div className="Navbar">
      <div className="Nav-container">
        <ul>
        <li onClick={goToMain}><NavItem icon={faNewspaper} label="Actualites" /></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar