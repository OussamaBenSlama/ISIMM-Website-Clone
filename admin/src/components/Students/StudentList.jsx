import React, { useState, useEffect } from 'react';
import '../List.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/students/');
        if (response.ok) {
          const data = await response.json();
          setStudents(data); // Update state with the fetched data
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
    <div className='ListContainer'>
      <div className='ListItems'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Cin</th>
              <th>Email</th>
              <th>Last name</th>
              <th>First name</th>
              <th>Speciality</th>
              <th style={{ borderRight: '1px solid white' }}>Level</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.cin}</td>
                <td>{student.email}</td>
                <td>{student.lname}</td>
                <td>{student.fname}</td>
                <td>{student.speciality_name}</td>
                <td style={{ borderRight: '1px solid white' }}>{student.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
