import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';

const EditFormation = () => {
  const { id } = useParams();
  const [Formation, setFormation] = useState({
    title: '',
    description: '',
    plan: null, // Initialize plan to null
    category: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchFormationDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/formation/${id}/`);
        setFormation(response.data);
      } catch (error) {
        console.error('Error fetching Formation details:', error);
      }
    };

    fetchFormationDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormation((prevFormation) => ({ ...prevFormation, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormation((prevFormation) => ({ ...prevFormation, plan: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', Formation.title);
      formData.append('description', Formation.description);
      formData.append('plan', Formation.plan); // Append the file object
      formData.append('category', Formation.category);

      await axios.put(`http://127.0.0.1:8000/api/formation/${id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      navigate('/formation');
    } catch (error) {
      console.error('Error updating Formation:', error);
    }
  };

  const handleCancel = () => {
    navigate('/formation');
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Navbar />
        <div style={{ width: '100%', flexBasis: '80%' }}>
          <Header />
          <div
            style={{
              width: '100%',
              minHeight: '90vh',
              height: 'auto',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '3rem',
              backgroundColor: '#f2f3f8',
            }}
          >
            <form className='Form' onSubmit={handleSubmit} method='post' encType='multipart/form-data'>
              <div>
                <label>Title</label>
                <input type="text" name="title" value={Formation.title} onChange={handleChange} />
              </div>
              <div>
                <label>Description</label>
                <textarea type="text" name="description" value={Formation.description} onChange={handleChange} style={{ width: '100%', height: '12rem', padding: '0.2rem', resize: 'none' }} />
              </div>
              <div>
                <label>Emploi</label>
                <input type="file" name="plan" onChange={handleFileChange} />
              </div>
              <div>
                <label>Category</label>
                <select name="category" value={Formation.category} onChange={handleChange}>
                  <option>choose a category</option>
                  <option>Liscence</option>
                  <option>Ingenieurie</option>
                  <option>Cycle préparatoire intégré</option>
                  <option>Mastere</option>
                </select>
              </div>
              <br />

              <div>
                <input type="submit" value="Submit" id='button' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditFormation;
