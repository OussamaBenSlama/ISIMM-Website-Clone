import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../List.css';

const SpecialityList = () => {
  const [specialities, setSpecialities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/students/specialityList/');
        if (response.ok) {
          const data = await response.json();
          setSpecialities(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='ListContainer'>
      <div className='ListItems'>
        <table>
          <thead>
            <tr>
              <th>Speciality</th>
              <th>Level</th>
              <th>Number of Students</th>
              <th>Group Number</th>
            </tr>
          </thead>
          <tbody>
            {specialities.map(speciality => (
              <tr key={`${speciality.speciality_name}-${speciality.level}`}>
                <td><Link
                        to={`/specialite/${speciality.speciality_name}/${speciality.level}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                        {speciality.speciality_name}
                        </Link>
                        </td>
                <td>{speciality.level}</td>
                <td>{speciality.num_students}</td>
                <td>{speciality.group_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SpecialityList;
