import React from 'react'
import './styles/Navbar.css'
import {faNewspaper} from '@fortawesome/free-solid-svg-icons';
import NavItem from './NavItem';
 
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Nav-container">
        <ul>
            <li><NavItem icon={faNewspaper} label="Actualites" /></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar