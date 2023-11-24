import React from 'react'
import './styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars ,faEnvelope ,faBell } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='Header'>
       <span><FontAwesomeIcon icon={faBars} className='head-icon'/></span>
       <div>
          <span><FontAwesomeIcon icon={faBell} className='head-icon'/></span>
          <span><FontAwesomeIcon icon={faEnvelope} className='head-icon'/></span>
       </div>
    </div>
  )
}

export default Header
