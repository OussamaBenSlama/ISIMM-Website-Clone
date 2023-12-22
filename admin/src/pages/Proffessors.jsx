import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Add from '../components/buttons/Add'
import { useNavigate } from 'react-router-dom'
import ProfList from '../components/Profs/ProfList'
const Proffessors = () => {
  const navigate = useNavigate()

  const gotoAddStudent = () => {
    navigate('/addenseignants')
  }
  return (
    <div style={{display:'flex'}}>
      <Navbar/>
      <div style={{width:'100%' ,flexBasis:'80%'}}>
        <Header/>
        <div
              style={{
                width: '100%',
                height: '5vh',
                display: 'flex',
                justifyContent: 'right',
                padding: '1rem',
                backgroundColor: 'rgb(250,250,250)',
              }}
            >
            <div onClick={gotoAddStudent}><Add /></div>
            </div>
            <ProfList/>
      </div>
    </div>
  )
}

export default Proffessors;