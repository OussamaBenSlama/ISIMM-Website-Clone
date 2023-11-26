import React from 'react';
import './styles/Navbar.css'
import NavItem from './navItem/NavItem'
import { faGraduationCap , faBuilding} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const goToFormation = () => {
    navigate('/formation')
  }
  return (
    <div className="Navbar">
      <div className="Nav-container"> 
      <div style={{width:'100%', height:'10vh', backgroundColor:'white', opacity:'30%',marginBottom:'50px'}}></div>
        <ul>
          <li onClick={goToFormation}><NavItem icon={faGraduationCap} label="Formations" /></li>
          <li><NavItem icon={faBuilding} label="Départements"/></li>
        </ul>
        
      </div>
    </div>
  );
}

export default Navbar;