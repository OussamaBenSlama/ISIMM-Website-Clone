import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/NavItem.css'

const NavItem = ({ icon, label }) => {
  return (
    <div className='NavItem'>
        <FontAwesomeIcon icon={icon} className='nav-icon'/>
        <span>{label}</span>
    </div>
  )
}

export default NavItem