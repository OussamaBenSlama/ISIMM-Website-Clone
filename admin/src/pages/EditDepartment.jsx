import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';

const EditDepartment = () => {
  const { id } = useParams();

  const [department, setDepartment] = useState({
    name: '',
    description: '',
    leader_of_department: '',
    established_date: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDepartmentDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/departments/${id}/`);
        setDepartment(response.data);
      } catch (error) {
        console.error('Error fetching department details:', error);
      }
    };

    fetchDepartmentDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment((prevDepartment) => ({ ...prevDepartment, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://127.0.0.1:8000/api/departments/${id}/`, department);
       navigate('/departement');
    } catch (error) {
      console.error('Error updating department:', error);
    }
  };

  const handleCancel = () => {
    navigate('/departement');
  };

  return (
    <div>
      <div style={{ display: 'flex'  }}>
        <div style={{ width: '20%' }}>
          <Navbar />
        </div>
        <div style={{ width: '100%', flexBasis: '80%'}}>
          <Header />
          <div  className='ContainerForm'>
            
            <form onSubmit={handleSubmit}  className='Form'>
              <div style={{ marginBottom: '0.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.2rem' }}>Name:</label>
                <input type="text" name="name" value={department.name} onChange={handleChange} style={{ width: '100%', padding: '0.5rem' }} />
              </div>
              <div style={{ marginBottom: '0.2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Description:</label>
                <textarea name="description" value={department.description} onChange={handleChange} style={{ width: '100%', height: '12rem', padding: '0.2rem', resize: 'none' }} />
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Leader of Department:</label>
                <input
                  type="text"
                  name="leader_of_department"
                  value={department.leader_of_department}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.5rem' }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Established Date:</label>
                <input
                  type="date"
                  name="established_date"
                  value={department.established_date}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.5rem' }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <button type="submit" style={{ backgroundColor: '#061e6e', color: 'white', padding: '0.5rem', width:'12rem', border: 'none', borderRadius: '15px' }}>Submit</button>
                <button type="button" onClick={handleCancel} style={{ backgroundColor: '#ccc', color: 'black', padding: '0.5rem', width:'12rem', border: 'none', borderRadius: '15px' }}>Annuler</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDepartment;
