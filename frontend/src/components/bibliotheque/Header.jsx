import React from 'react'
import './style/header.css'
import bibliotheque from '../../images/bibliotheque1.jpg'

const Header = () => {
  return (
    <div className='header_formaion'>
       <img src={bibliotheque}/>
       <div className='header_cover'>

       </div>
    </div>
  )
}

export default Header
