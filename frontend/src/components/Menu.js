// Menu.js
import React, { useState } from 'react';
import '../styles/menu.css'; // Import the CSS file
import logo from '../images/logo_isimm.png'

const Menu = ({ onClose }) => {
  

  

  return (
    <div className={`menu-content show`}>
     <div className='menu-header'>
      <img src={logo}/>
      <button onClick={onClose}>Close Menu</button>
     </div>
    </div>
    
  );
};

export default Menu;
