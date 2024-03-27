import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Add from '../components/buttons/Add';
import { useNavigate } from 'react-router-dom';
import ProfList from '../components/Profs/ProfList';
import DepList from '../components/Profs/DepList';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListDep = () => {
    const [data, setData] = useState(null);
    const [formData, setFormData] = useState({ cadre: '', department: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/departments/');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const gotoAddStudent = () => {
        navigate('/addenseignants');
    };

    return (
        <div style={{ display: 'flex' }}>
            <Navbar />
                <div style={{ width: '100%', flexBasis: '80%' }}>
                    <Header />
                    <div className='att_header'>
                <p>Proffessors</p>
                <button onClick={gotoAddStudent}>
                    <FontAwesomeIcon icon={faPlusCircle} color='white' style={{marginRight:'5px'}}/>
                    Add prof
                </button>
                </div>
                <div style={{
                        width: '100%',
                        height: '1vh',
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop:'30px',
                        backgroundColor: '#f2f3f8',
                    }}>
                <div style={{
                         backgroundColor:'#f2f3f8',
                        marginRight:'15px'
                    }} >
                     
                        <label>Cadre :</label>
                        <br />
                        <select name='cadre' value={formData.cadre} onChange={handleChange}>
                            <option></option>
                            <option>ASSISTANT</option>
                            <option>CONTRACTUEL</option>
                            <option>MAÎTRE ASSISTANT</option>
                            <option>PROFESSEUR</option>
                            <option>PROFESSEUR TRONC COMMUN</option>
                            <option>MAÎTRE DES CONFÉRENCES</option>
                        </select>
                    </div>
                    <div>
                     
                        <label>Departement :</label>
                        <select name='department' value={formData.department} onChange={handleChange}>
                            <option></option>
                            {data?.map((item) => (
                                <option key={item.id} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    </div>
                <ProfList department={formData.department} cadre={formData.cadre} />
            </div>
        </div>
    );
};

export default ListDep;
