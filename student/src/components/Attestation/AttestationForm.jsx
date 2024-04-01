import React, { useEffect, useState } from 'react';
import './AttestationForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useUserContext } from '../global/User';
import axios from 'axios';

const AttestationForm = () => {
    const [addAttestation, setAddAttestation] = useState(false);
    const [formData, setFormData] = useState({
        cin: '',
        student_id: ''
    });
    const { user, setUser } = useUserContext();
    console.log(user)

    const ajouterAttestation = () => {
        setAddAttestation(true);
    }

    const cancelAttestation = () => {
        setAddAttestation(false);
    }

    // check if there is a submitted attestation 
    const [attestationData, setAttestationData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = `http://localhost:8000/api/get_attestation/${user.cin}/${user.id}`;
        axios.get(apiUrl)
      .then(response => {
        if (response.data) {
          setAttestationData(response.data);
        } else {
          setAttestationData(null);
        }
      })
        .catch(error => {
            console.log(error.message);
        });
    }, []);

    console.log(attestationData)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(formData.cin != user.cin || formData.student_id != user.id) {
                alert("verify your cin or id");
                return
            }
            const response = await fetch('http://localhost:8000/api/save_attestation/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                alert('Form submitted successfully!');
                // Reset form fields after successful submission
                setFormData({
                    cin: '',
                    student_id: ''
                });
                // Hide the form
                setAddAttestation(false);
            } else {
                const responseData = await response.json();
                console.error('Error submitting form:', responseData);
                alert('Error submitting form. Please check the console for details.');
            }
        } catch (error) {
            console.error('Error during form submission:', error);
            alert('Error during form submission. Please check the console for details.');
        }
    }
    
    return (
        <div className='Attestation'>
            <div className='att_header'>
                <p>Attestation</p>
                <button onClick={ajouterAttestation}>
                    <FontAwesomeIcon icon={faPlusCircle} color='white' style={{ marginRight: '5px' }} />
                    Add attestation
                </button>
            </div>
            <div className='att-container'>
                {addAttestation ?
                    (
                        <form className='form-add-attestation' onSubmit={handleSubmit}>
                            <div className='left-form'>
                                <div>
                                    <label>Cin <span>*</span></label>
                                    <input type='text' name='cin' value={formData.cin} onChange={handleChange} />
                                </div>
                                <div>
                                    <label>Student Id <span>*</span></label>
                                    <input type='text' name='student_id' value={formData.student_id} onChange={handleChange} />
                                </div>
                            </div>
                            <div className='right-form'>
                                <button type='submit' onClick={handleSubmit}>Save</button>
                                <button id='cancel' onClick={cancelAttestation}>Cancel</button>
                            </div>
                        </form>
                    ) :
                    (
                        null
                    )}
            </div>
        </div>
    );
}

export default AttestationForm;
