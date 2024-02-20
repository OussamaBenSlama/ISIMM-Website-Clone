import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'
import EmploiForm from '../components/groupes/EmploiForm'

const AddEmploi = () => {
  const location = useLocation()
  const groupe = location.state.item || null 
  console.log(groupe)
  return (
    <div style={{ display: 'flex'}}>
        <Navbar />
        <div style={{ width: '100%', flexBasis: '80%' }}>
          <Header />
          <EmploiForm groupe={groupe} />
        </div>
      </div>
  )
}
export default AddEmploi