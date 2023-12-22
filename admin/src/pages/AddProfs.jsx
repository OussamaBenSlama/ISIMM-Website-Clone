import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import ProfsForm from '../components/Profs/ProfsForm'


const AddProfs = () => {
  return (
    <div style={{ display: 'flex'}}>
        <Navbar />
        <div style={{ width: '100%', flexBasis: '80%' }}>
          <Header />
          <ProfsForm/>
        </div>
      </div>
  )
}

export default AddProfs;