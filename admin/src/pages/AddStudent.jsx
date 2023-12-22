import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import ActualitesForm from '../components/Actualites/ActualitesForm'
import StudentForm from '../components/Students/StudentForm'

const AddStudent = () => {
  return (
    <div style={{ display: 'flex'}}>
        <Navbar />
        <div style={{ width: '100%', flexBasis: '80%' }}>
          <Header />
          <StudentForm/>
        </div>
      </div>
  )
}

export default AddStudent