import React from 'react'
import './styles/Navbar.css'
import {faCertificate, faClock, faNewspaper, faTimes} from '@fortawesome/free-solid-svg-icons';
import NavItem from './NavItem';
import { useNavigate } from "react-router-dom";


   
const Navbar = () => {
  const navigate = useNavigate();
 
  const goToMain = () => {
    navigate('/home');
  };
  const goToEmploi = () => {
    navigate('/emploi');
  };
  const goToAttestation = () => {
    navigate('/attestation');
  };
  return (
    <div className="Navbar">
      <div className="Nav-container">
        <ul>
          <li onClick={goToMain}><NavItem icon={faNewspaper} label="Actualites" /></li>
          <li onClick={goToEmploi}><NavItem icon={faClock} label="Emploi du temps" /></li>
          <li onClick={goToAttestation}><NavItem icon={faCertificate} label="attestation de présence" /></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar