import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
const Main = () => {
  return (
    <div style={{display:'flex'}}>
      <Navbar/>
      <div style={{width:'100%' ,flexBasis:'75%'}}>
        <Header/>
      </div>
    </div>
  )
}

export default Main
