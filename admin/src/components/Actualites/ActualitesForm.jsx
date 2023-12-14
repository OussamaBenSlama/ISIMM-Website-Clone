import React, { useState } from 'react';
import './ActualitesForm.css'
import axios from 'axios';

const ActualitesForm = () => {
    const [formData, setFormData] = useState({
        image: null,
        title: '',
        date: '',
        description: '',
        category: 'Isimm', // Default category
    });

    const handleChange = (e) => {
        const { name, type, files } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : e.target.value,
        }));
    };
    
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('image', formData.image); // Assuming 'image' is the correct name of the file input
            
            formDataToSend.append('title', formData.title);
            formDataToSend.append('date', formData.date);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('category', formData.category);
            const response = await axios.post('http://127.0.0.1:8000/api/actualites/', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            alert("Actualite created successfully")
        } catch (error) {
            alert("Error creating actualite")
        }
    };
    
  return (
    <div className='ActualitesForm'>
      <form onSubmit={handleSubmit} className='Form' method='post'>
        <div>
            <label>Cover :</label>
            <input type="file" name="image" onChange={handleChange} />
        </div>
        <div>
            <label>Title :</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
            <label>Date :</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div>
            <label>Description :</label>
            <textarea name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
            <label>Category</label>
            <select name="category" value={formData.category} onChange={handleChange}>
            <option>Isimm</option>
            <option>Formation</option>
            <option>Recherche</option>
            <option>Entreprise</option>
            <option>Contact</option>
            </select>
        </div>
        <br></br>

        <div >
            <input type="submit" value="Submit" id='button'/>
        </div>
      </form>
    </div>
  );
};

export default ActualitesForm;
