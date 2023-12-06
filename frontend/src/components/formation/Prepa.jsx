import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaDownload } from 'react-icons/fa';
import './styles/FormationCore.css';

const Prepa = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/formation_prepa')
      .then(response => setdata(response.data))
      .catch(error => console.error('Error fetching actualites:', error));
  }, []);

  const handleDownload = async (pdfUrl, pdfFileName) => {
    const response = await fetch(pdfUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const a = document.createElement('a');
    a.href = url;
    a.download = pdfFileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className='Formation_container'>
      <div style={{ padding: '2rem' }}>
        {data.map((item, index) => (
          <div key={index} className='Formation_container'>
            <h2>{item.title}</h2>
            <span>Formation - {item.category}</span> <br/><br/>
            <p>{item.description}</p>
            <button onClick={() => handleDownload(item.plan, 'emploi_du_temps.pdf')}>
              <FaDownload /> Download Emploi du temps
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prepa;
