import React, { useState } from 'react'
import './Form.css'
const Form = ({data}) => {
    const [formData, setFormData] = useState({
        id: data.id,
        cin: data.cin,
        email:data.email,
        fname: data.fname,
        lname: data.lname,
        speciality: data.speciality_name,
        level: data.level, 
       
      });
      console.log(data)
    const handleChange = () => {

    }
  return (
    <div className='FormContainer'>
        <form  className='Form' method='post'>
            <div style={{marginRight:'2rem'}}>
                <div>
                    <label>Id :</label>
                    <input type='text' name='id' value={formData.id} onChange={handleChange} readOnly/>
                </div>
                <div>
                <label>Cin :</label>
                <input type='text' name='cin' value={formData.cin} onChange={handleChange} readOnly/>
                </div>
                <div>
                <label>Email :</label>
                <input type='email' name='email' value={formData.email} onChange={handleChange} readOnly/>
                </div>
                <div>
                <label>First Name :</label>
                <input type='text' name='fname' value={formData.fname} onChange={handleChange} readOnly/>
                </div>
                <div>
                <label>Last Name :</label>
                <input type='text' name='lname' value={formData.lname} onChange={handleChange} readOnly/>
                </div>
                <div>
                <label>Speciality :</label>
                <input type='text' name='speciality' value={formData.speciality} onChange={handleChange} readOnly/>
                </div>
            </div>
            <div>
                <div>
                    <label>Level of studies :</label>
                    <input type='text' name='level' value={formData.level} onChange={handleChange} readOnly/>
                </div>
                <br />
                <div>
                    <input type='submit' value='Submit' id='button' />
                </div>
            </div>
            

            
        </form>
    </div>
  )
}

export default Form