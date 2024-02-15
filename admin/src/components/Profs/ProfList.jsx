import React, { useState, useEffect } from 'react';
import '../List.css';

const ProfList = ({ department, cadre }) => {
  const [profs, setProfs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://127.0.0.1:8000/profs/by_department/?department_name=${department}&cadre=${cadre}`;
        const response = await fetch(url);
        
        if (response.ok) {
          const data = await response.json();
          setProfs(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [department, cadre]);

  return (
    <div className='ListContainer'>
      <div className='ListItems'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Cin</th>
              <th>Email</th>
              <th>Name</th>
              <th>Department</th>
              <th>Cadre</th>
              <th style={{ borderRight: '1px solid white' }}>Phone</th>
            </tr>
          </thead>
          <tbody>
            {profs.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.cin}</td>
                <td>{item.email}</td>
                <td>{item.fname} {item.lname}</td>
                <td>{item.department_name}</td>
                <td>{item.cadre}</td>
                <td style={{ borderRight: '1px solid white' }}>{item.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfList;
