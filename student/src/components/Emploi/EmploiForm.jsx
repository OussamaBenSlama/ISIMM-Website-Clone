import React, { useEffect, useState } from 'react';
import './EmploiForm.css';

const EmploiForm = () => {
  const [groupes, setGroupes] = useState([]);
  const [selectedGroupe, setSelectedGroupe] = useState(null); // Initialize to null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/groupes/');
        const resulte = await res.json();
        setGroupes(resulte);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    setSelectedGroupe(event.target.value); // Set selectedGroupe to the selected value
  };

  const handleDownload = async (pdfUrl, pdfFileName) => {
    if (pdfUrl) { // Check if pdfUrl is not undefined
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const a = document.createElement('a');
      a.href = url;
      a.download = pdfFileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      console.error('Emploi URL not found for selected groupe');
    }
  };
  

  return (
    <div className='EmploiForm'>
      <div>
        <select onChange={handleChange}>
          <option value=''>choisir votre TD</option>
          {groupes.map((item) => (
            <option key={item.id} value={item.id}>{item.formation_name}-{item.niveau}-TD{item.rank}</option>
          ))}
        </select>

        {selectedGroupe !== null && ( // Check if selectedGroupe is not null
        <div>
          <br/>
          <button onClick={() => handleDownload(groupes.find((item) => selectedGroupe === item.id)?.emploi, 'emploi_du_temps.pdf')}>
             Download Emploi du temps
          </button>
        </div>
      )}
      </div>
      
    </div>
  );
};

export default EmploiForm;
