// Menu.js
import React, { useState } from 'react';
import '../styles/menu.css'; // Import the CSS file
import logo from '../images/logo_isimm.png'
import back from '../images/isimm_amine/isimm8.jpg'
import { FaArrowRight, FaTimes} from 'react-icons/fa'; 
import {ISIMM,VieAssociative,VieEtudiant,International} from './menuData'
const Menu = ({ onClose }) => {
  // for the second child
  const [showInstitut , setShowInstitut] = useState(false)
  const [showFormation , setShowFormation] = useState(false)
  const [showRecherche , setShowRecherche] = useState(false)
  const [showEntreprise , setShowEntreprise] = useState(false)

  // for the third child
  const [showIsimm, setShowIsimm] = useState(false)
  const [showVE, setShowVE] = useState(false)
  const [showVA, setShowVA] = useState(false)
  const [showInternational, setShowInternational] = useState(false)
  
const fcshowInstitut = ()=> {
  setShowRecherche(false)
  setShowFormation(false)
  setShowEntreprise(false)
  setShowInstitut(!showInstitut)
  setShowVA(false)
  setShowVE(false)
  setShowInternational(false)
  setShowIsimm(false)
  
}
const fcshowFormation = ()=> {
  setShowRecherche(false)
  setShowInstitut(false)
  setShowEntreprise(false)
  setShowFormation(!showFormation)
  
}
const fcshowRecherche = ()=> {
  setShowInstitut(false)
  setShowFormation(false)
  setShowEntreprise(false)
  setShowRecherche(!showRecherche)
  
}
const fcshowEntreprise = ()=> {
  setShowInstitut(false)
  setShowFormation(false)
  setShowRecherche(false)
  setShowEntreprise(!showEntreprise)
  
}
const fcshowIsimm = () => {
  setShowVA(false)
  setShowVE(false)
  setShowInternational(false)
  setShowIsimm(!showIsimm)
}
const fcshowVA = () => {
  setShowVE(false)
  setShowInternational(false)
  setShowIsimm(false)
  setShowVA(!showVA)
  
}
const fcshowVE = () => {
  setShowVA(false)
  setShowInternational(false)
  setShowIsimm(false)
  setShowVE(!showVE)
}
const fcshowInternational = () => {
  setShowVA(false)
  setShowIsimm(false)
  setShowVE(false)
  setShowInternational(!showInternational)
}
const Institut = () => {
  
  return (
    <ul>
          <li onClick={fcshowIsimm}>ISIMM <FaArrowRight style={{fontSize:'20px'}}/></li>
          <li onClick={fcshowVE}>Vie Etudiantine <FaArrowRight style={{fontSize:'20px'}}/></li>
          <li onClick={fcshowVA}>Vie Associative <FaArrowRight style={{fontSize:'20px'}}/></li>
          <li onClick={fcshowInternational}>International <FaArrowRight style={{fontSize:'20px'}}/></li>
          <li>Consultation</li>
    </ul>
  )
}
const Formation = () => {
  
  return (
    <ul>
          <li>Ingenieurie</li>
          <li>Mastere</li>
          <li>Liscence</li>
          <li>Cycle préparatoire integré</li>
          
    </ul>
  )
}
const Recherche = () => {
  
  return (
    <ul>
          <li>Labo de recherche</li>
          <li>Unité de recherche</li>
          <li>Projet de recherche</li>
    </ul>
  )
}
const Entreprise = () => {
  
  return (
    <ul>
          <li>Etudiant</li>
          <li>Entreprise</li>
          <li>Entreprise partenaires</li>
          <li>Offre de stages</li>
    </ul>
  )
}

  return (
    <div className={`menu-content show`}>
     <img src={back}/>
     <div className='menu-container'>
      <div className='menu-header'>
        <img src={logo}/>
        <FaTimes onClick={onClose} className='close_icon'/>
      </div>
      <div className='menu-elements'>
       <div className='menu-child'>
        <ul>
          <li onClick={fcshowInstitut}>Institut <FaArrowRight style={{fontSize:'20px'}}/></li>
          <li onClick={fcshowFormation}>Formation <FaArrowRight style={{fontSize:'20px'}}/></li>
          <li onClick={fcshowRecherche}>Recherche <FaArrowRight style={{fontSize:'20px'}}/></li>
          <li onClick={fcshowEntreprise}>Entreprise <FaArrowRight style={{fontSize:'20px'}}/></li>
          <li>Contact</li>
        </ul>
       </div>
       <div className='menu-child'>
       {showInstitut ? (
        <Institut/>
       ):
       (
        null
       )}
       {showFormation ? (
        <Formation/>
       ):
       (
        null
       )}
       {showRecherche ? (
        <Recherche/>
       ):
       (
        null
       )}
       {showEntreprise ? (
        <Entreprise/>
       ):
       (
        null
       )}
       </div>
       <div className='menu-child'>
        {showInstitut &&  showIsimm? (
          <ISIMM/>
        ):
        (
          null
        )}
        {showInstitut &&  showVE? (
          <VieEtudiant/>
        ):
        (
          null
        )}
        {showInstitut &&  showVA? (
          <VieAssociative/>
        ):
        (
          null
        )}
        {showInstitut &&  showInternational ? (
          <International/>
        ):
        (
          null
        )}
       </div>
      </div>
     </div>
    </div>
    
  );
};

export default Menu;
