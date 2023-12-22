import React from 'react';
import './styles/Navbar.css';
import NavItem from './navItem/NavItem';
import { faGraduationCap, faBuilding, faNewspaper,faPerson, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const goToFormation = () => {
    navigate('/formation');
  };

  const goToMain = () => {
    navigate('/main');
  };

  const goToDepartement = () => {
    navigate('/departement');
  };
  const goToEtudiant = () => {
    navigate('/etudiants');
  };
  const goToEnseignants = () => {
    navigate('/enseignants');
  };

  return (
    <div className="Navbar">
      <div className="Nav-container">
        <ul>
          <li onClick={goToMain}><NavItem icon={faNewspaper} label="Actualites" /></li>
          <li onClick={goToEtudiant}><NavItem icon={faPerson} label="Etudiants" /></li>
          <li onClick={goToEnseignants}><NavItem icon={faPeopleGroup} label="Enseignants" /></li>
          <li onClick={goToFormation}><NavItem icon={faGraduationCap} label="Formations" /></li>
          <li onClick={goToDepartement}><NavItem icon={faBuilding} label="Départements" /></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
