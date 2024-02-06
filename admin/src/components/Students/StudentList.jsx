import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../List.css';

const StudentList = () => {
  const { speciality, level } = useParams();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/students/students-by-speciality-and-level/?speciality=${speciality}&level=${level}`);
        if (response.ok) {
          const data = await response.json();
          setStudents(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [speciality, level]);

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
