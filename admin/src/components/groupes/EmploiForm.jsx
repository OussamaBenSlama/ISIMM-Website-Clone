import React, { useState } from 'react';
import axios from 'axios';
import './styles/EmploiForm.css';

const EmploiForm = ({ groupe }) => {
    // console.log(groupe)
    const [formData, setFormData] = useState({
        id:groupe.id,
        emploi: groupe.emploi,
        formation: groupe.formation,
        formation_name : groupe.formation_name,
        niveau: groupe.niveau,
        rank: groupe.rank,
        date_creation : groupe.date_creation
    });

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            emploi: e.target.files[0]  // Update the emploi field with the selected file
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('id', formData.id);
            formDataToSend.append('emploi', formData.emploi);
            formDataToSend.append('formation', formData.formation);
            formDataToSend.append('formation_name', formData.formation_name);
            formDataToSend.append('niveau', formData.niveau);
            formDataToSend.append('rank', formData.rank);
            formDataToSend.append('date_creation', formData.date_creation);

            // Make a POST request to the backend API endpoint
            const response = await axios.put(`http://127.0.0.1:8000/api/update_group/`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Handle the response (optional)
            alert('Emploi modified successfully:');
        } catch (error) {
            // Handle errors
            alert('Error modifying emploi:');
        }
    };

    return (
        <div className='EmploiForm'>
            <form className='Form' onSubmit={handleSubmit}>
                <div>
                    <label>Emploi du temps :</label>
                    <input type='file' onChange={handleFileChange} />
                </div>
                <div className='btn'>
                    <input type='submit' value="ajouter" id='button' />
                </div>
            </form>
        </div>
    );
};

export default EmploiForm;
