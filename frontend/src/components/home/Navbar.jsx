import React from 'react'
import { useNavigate } from 'react-router-dom';

import './styles/Navbar.css'
import isimm from './images/isimm_header.png'
import { FaBars } from 'react-icons/fa'
const Navbar = ({setMenuVisibility,isMenuVisible}) => {

  const navigate = useNavigate();

  const handleImageClick = () => {
     navigate('/');
  };

  return (
    <div className='Navbar'>
        
      <img src={isimm} alt="Home" onClick={handleImageClick} />
     
       <FaBars style={{marginRight:'1rem',fontSize:'22px',cursor:'pointer',color:'#061e6e'}}
         onClick={()=>setMenuVisibility(!isMenuVisible)}
       />
    </div>
  )
}

export default Navbar
