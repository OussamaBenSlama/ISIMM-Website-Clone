import React, { useState, useEffect } from 'react';
import '../List.css';

const DepList = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/departments/');
        if (response.ok) {
          const data = await response.json();
          setDepartments(data); // Update state with the fetched data
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // The empty dependency array ensures that this effect runs only once

  return (
    <div className='ListContainer' >
      <div className='ListItems'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Leader of Department</th>
               
            </tr>
          </thead>
          <tbody>
            {departments.map((department) => (
              <tr key={department.id}>
                <td>{department.id}</td>
                <td>{department.name}</td>
                <td>{department.leader_of_department}</td>
                 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepList;
