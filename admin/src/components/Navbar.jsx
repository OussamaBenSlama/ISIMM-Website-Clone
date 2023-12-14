import React from 'react';
import './styles/Navbar.css'
import NavItem from './navItem/NavItem'
import { faGraduationCap , faBuilding, faNewspaper} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const goToFormation = () => {
    navigate('/formation')
  }
  const goToMain = () => {
    navigate('/main')
  }
  return (
    <div className="Navbar">
      <div className="Nav-container"> 
        <ul>
          <li onClick={goToMain}><NavItem icon={faNewspaper} label="Actualites"/></li>
          <li onClick={goToFormation}><NavItem icon={faGraduationCap} label="Formations" /></li>
          <li><NavItem icon={faBuilding} label="Départements"/></li>
        </ul>
        
      </div>
    </div>
  );
}

export default Navbar;