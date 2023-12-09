import React from 'react'
import './style/Header.css'
import dep_info from '../../images/dep_info.jpg';

const Header_info = () => {
  return (
    <div className='header_formaion'>
       <img src={dep_info}/>
       <div className='header_cover'>

       </div>
    </div>
  )
}

export default Header_info
