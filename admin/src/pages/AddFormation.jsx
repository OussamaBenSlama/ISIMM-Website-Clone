import React, { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import axios from 'axios';

const AddFormation = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    plan: null,
    category: '', // Default category
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('plan', formData.plan); // Assuming 'plan' is the correct name of the file input
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('category', formData.category);
      const response = await axios.post('http://127.0.0.1:8000/api/formation/addformation', formDataToSend, {
          headers: {
              'Content-Type': 'multipart/form-data',
          },
      });

      alert("Formation added successfully")
  } catch (error) {
      alert("Error creating ")
  }
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
              backgroundColor: 'rgb(250,250,250)',
            }}
          >
            <form className='Form' onSubmit={handleSubmit} method='post' encType='multipart/form-data'>
               <div>
                  <label>Title</label>
                  <input type="text" name="title" value={formData.title} onChange={handleChange} />
               </div>
               <div>
                  <label>Description</label>
                  <textarea type="text" name="description" value={formData.description} onChange={handleChange} />
               </div>
               <div>
                  <label>Emploi</label>
                  <input type="file" name="plan" onChange={handleChange} />
               </div>
              <div>
                <label>Category</label>
                <select name="category" value={formData.category} onChange={handleChange}>
                  <option>choose a category</option>
                  <option>Liscence</option>
                  <option>Ingenieurie</option>
                  <option>Cycle préparatoire intégré</option>
                  <option>Mastere</option>
                </select>
              </div>
              <br />

              <div>
              <input type="submit" value="Submit" id='button'/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFormation;
