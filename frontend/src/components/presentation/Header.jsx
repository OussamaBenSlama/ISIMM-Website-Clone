import React from 'react'
import '../formation/styles/Header.css'
import isimm from '../../images/isimm_amine/isimm3.jpg'

const Header = () => {
  return (
    <div className='header_formaion'>
       <img src={isimm}/>
       {/* <div className='header_cover'>
       </div> */}
    </div>
  )
}

export default Header
