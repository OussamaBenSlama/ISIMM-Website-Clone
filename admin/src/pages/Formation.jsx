import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import FormationItem from '../components/formationItem/FormationItem';
import Add from '../components/buttons/Add';
import { useNavigate } from "react-router-dom";

const Formation = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/formation');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (itemId) => {
    setData((prevData) => prevData.filter((item) => item.id !== itemId));
  };
  const goAddFormation = ()=> {
    navigate('/formation/addformation')
  }

  return (
    <div>
      {data ? (
        <div style={{ display: 'flex' }}>
          <Navbar />
          <div style={{ width: '100%', flexBasis: '80%' }}>
            <Header />
            <div
              style={{
                width: '100%',
                height: '5vh',
                display: 'flex',
                justifyContent: 'right',
                padding: '1rem',
                backgroundColor: 'rgb(250,250,250)',
              }}
            >
            <div onClick={goAddFormation}><Add /></div>
            </div>

            <div
              style={{
                width: '100%',
                minHeight: '90vh',
                height: 'auto',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                padding: '3rem',
                backgroundColor: 'rgb(250,250,250)',
              }}
            >
              {data.map((item, index) => (
                <FormationItem key={index} item={item} onDelete={() => handleDelete(item.id)} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Formation;
