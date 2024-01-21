import React , {useState,useEffect}from 'react';
import '../List.css';

const ProfList = () => {

  const [profs, setProfs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/profs/');
        if (response.ok) {
          const data = await response.json();
          setProfs(data); // Update state with the fetched data
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // The empty dependency array ensures that this effect runs only once

  console.table(profs)
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
              <th style={{ borderRight: '1px solid white' }}>phone</th>
            </tr>
          </thead>
          <tbody>
            {profs.map((item) => {
              return(
                <tr>
                  <td>{item.id}</td>
                  <td>{item.cin}</td>
                  <td>{item.email}</td>
                  <td>{item.fname} {item.lname}</td>
                  <td>{item.department_name}</td>
                  <td>{item.cadre}</td>
                  <td style={{ borderRight: '1px solid white' }}>{item.phoneNumber}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfList;
