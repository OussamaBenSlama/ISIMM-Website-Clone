import React from 'react'
import './styles/Navbar.css'
import isimm from './images/isimm_header.png'
import { FaBars } from 'react-icons/fa'
const Navbar = ({setMenuVisibility,isMenuVisible}) => {
  return (
    <div className='Navbar'>
       <img src={isimm}/>
       <FaBars style={{marginRight:'1rem',fontSize:'22px',cursor:'pointer',color:'#061e6e'}}
         onClick={()=>setMenuVisibility(!isMenuVisible)}
       />
    </div>
  )
}

export default Navbar
