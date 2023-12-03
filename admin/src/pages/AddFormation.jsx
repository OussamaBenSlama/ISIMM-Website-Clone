import React, { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
// import axios from 'axios';

const AddFormation = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    emploi: null,
    category: 'Liscence', // Default category
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
  
    const form = new FormData();
    form.append('title', formData.title);
    form.append('description', formData.description);
    form.append('emploi', formData.emploi);
    form.append('category', formData.category);
    for (var pair of form.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
    

  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/formation/addformation', {
        method: 'POST',
        body: form,
      });
  
      if (response.ok) {
        const data = await response.json();
        alert('You have successfully added a formation');
      } else {
        console.error('Error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
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
            <form onSubmit={handleSubmit} method='post' encType='multipart/form-data'>
              <label>Title</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} /> <br />
              <label>Description</label>
              <textarea type="text" name="description" value={formData.description} onChange={handleChange} /> <br />
              <label>Emploi</label>
              <input type="file" name="emploi" onChange={handleChange} /> <br />
              <label>Category</label>
              <select name="category" value={formData.category} onChange={handleChange}>
                <option>Liscence</option>
                <option>Ingenieurie</option>
                <option>Cycle préparatoire integré</option>
                <option>Mastere de recherche</option>
                <option>Mastere professionnelle</option>
              </select>
              <br />

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFormation;
