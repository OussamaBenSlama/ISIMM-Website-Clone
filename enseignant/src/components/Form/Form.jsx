import React, { useState } from 'react'
import './Form.css'
const Form = ({data}) => {
    const [formData, setFormData] = useState({
        id: data.id,
        cin: data.cin,
        email:data.email,
        fname: data.fname,
        lname: data.lname,
        department: data.department,
        department_name : data.department_name,
        cadre: data.cadre, 
        adresse : data.adresse,
        phoneNumber : data.phoneNumber,
        datebirth : data.datebirth ,
        ImageProfil : data.ImageProfil,
        password : "",
        first_check : !data.first_check,
       
      });
      
      const handleChange = (e) => {
        const { name, type, files } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : e.target.value,
        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        formData.password.trim()
        try {
          const response = await fetch('http://127.0.0.1:8000/profs/' + data.id + '/', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          if (!response.ok) {
            throw new Error('Failed to update enseignant.');
          }
      
          // Handle successful submission
          console.log('updated successfully');
        } catch (error) {
          // Handle errors
          console.error('Error updating :', error.message);
        }
        window.location.reload();
      };
      
  return (
    <div className='FormContainer'>
        <form  className='Form'>
            <div style={{marginRight:'2rem'}}>
                <div>
                    <label>Id :</label>
                    <input type='text' name='id' value={formData.id} onChange={handleChange} readOnly/>
                </div>
                <div>
                    <label>New password :</label>
                    <input type='text' name='password' value={formData.password} onChange={handleChange} />
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
                    <label>Department :</label>
                    <input type='text' name='department_name' value={formData.department_name} onChange={handleChange} readOnly/>
                </div>
                <div>
                    <label>Cadre :</label>
                    <input type='text' name='cadre' value={formData.cadre} onChange={handleChange} readOnly/>
                </div>
            </div>
            <div>
                <div>
                    <label>Adresse :</label>
                    <input type='text' name='adresse' value={formData.adresse} onChange={handleChange} />
                </div>
                <div>
                    <label>Phone number :</label>
                    <input type='text' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} />
                </div>
                <div>
                    <label>Date birth :</label>
                    <input type='date' name='datebirth' value={formData.datebirth} onChange={handleChange} />
                </div>
                <div>
                    <label>Image :</label>
                    <input type='file' name='ImageProfil'  onChange={handleChange} />
                </div>
                <br />
                <div>
                    <input type='submit' value='Submit' id='button' onClick={handleSubmit}/>
                </div>
            </div>
            

            
        </form>
    </div>
  )
}

export default Form