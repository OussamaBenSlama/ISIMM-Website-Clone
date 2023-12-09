import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style/departements.css';

const DepartementInfo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/department/informatique')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='Formation_container'>
      <div style={{ padding: '2rem' }}>
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className='Formation_container'>
              <h2>Departement  {item.name}</h2>
              <span><b>Chef departement: Mr {item.leader_of_department}</b></span> <br/>
              <span><b>Established date:{item.established_date}</b></span><br/><br/>

              <p>{item.description}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default DepartementInfo;
