import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const AddDepartment = () => {
  const [newDepartment, setNewDepartment] = useState({
    name: '',
    description: '',
    leader_of_department: '',
    established_date: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    description: '',
    leader_of_department: '',
    established_date: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDepartment((prevDepartment) => ({ ...prevDepartment, [name]: value }));
    // Clear the corresponding error when the user starts typing in the field
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate each required field
    if (!newDepartment.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!newDepartment.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!newDepartment.leader_of_department.trim()) {
      newErrors.leader_of_department = 'Leader of Department is required';
    }

    if (!newDepartment.established_date) {
      newErrors.established_date = 'Established Date is required';
    }

    setErrors(newErrors);

    // Return true if the form is valid, false otherwise
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     if (validateForm()) {
      try {
        console.log('Submitting department data:', newDepartment);

        await axios.post('http://127.0.0.1:8000/api/departments/', newDepartment);

         navigate('/departement');
      } catch (error) {
        console.error('Error creating department:', error);
      }
    }
  };
  const handleCancel = () => {
    navigate('/departement');
  };
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '20%' }}>
          <Navbar />
        </div>
        <div style={{ width: '80%' }}>
          <Header />
          <div style={{ padding: '3rem', backgroundColor: 'rgb(250, 250, 250)' }}>
            <h2 style={{ marginBottom: '1rem' }}>Add Department</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name:</label>
                <select name="name" value={newDepartment.name} onChange={handleChange} style={{ width: '100%', padding: '0.5rem' }}>
                  <option value="Informatique">Informatique</option>
                  <option value="Technologie">Technologie</option>
                  <option value="Mathematique">Mathematique</option>
                </select>
                {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Description:</label>
                <textarea
                  name="description"
                  value={newDepartment.description}
                  onChange={handleChange}
                  style={{ width: '100%', height: '12rem', padding: '0.5rem', resize: 'none' }}
                />
                {errors.description && <span style={{ color: 'red' }}>{errors.description}</span>}
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Leader of Department:</label>
                <input
                  type="text"
                  name="leader_of_department"
                  value={newDepartment.leader_of_department}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.5rem' }}
                />
                {errors.leader_of_department && <span style={{ color: 'red' }}>{errors.leader_of_department}</span>}
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Established Date:</label>
                <input
                  type="date"
                  name="established_date"
                  value={newDepartment.established_date}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.5rem' }}
                />
                {errors.established_date && <span style={{ color: 'red' }}>{errors.established_date}</span>}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button type="submit" style={{ backgroundColor: '#428bca', color: 'white', padding: '0.5rem', width:'12rem', border: 'none', borderRadius: '15px' }}>Submit</button>
                <button type="button" onClick={handleCancel} style={{ backgroundColor: '#ccc', color: 'black', padding: '0.5rem', width:'12rem', border: 'none', borderRadius: '15px' }}>Annuler</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDepartment;
