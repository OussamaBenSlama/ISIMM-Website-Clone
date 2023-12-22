import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Add from '../components/buttons/Add'
import { useNavigate } from 'react-router-dom'
import StudentList from '../components/Students/StudentList'
const Students = () => {
  const navigate = useNavigate()

  const gotoAddStudent = () => {
    navigate('/addstudent')
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
            <StudentList/>
            
      </div>
    </div>
  )
}

export default Students