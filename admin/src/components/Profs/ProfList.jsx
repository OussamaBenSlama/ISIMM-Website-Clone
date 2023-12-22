import React from 'react';
import '../List.css';

const ProfList = () => {
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
              <th>Departement</th>
              <th style={{ borderRight: '1px solid white' }}>Cadre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2300034</td>
              <td>14423248</td>
              <td>benslama@gmail.com</td>
              <td>Ben slama</td>
              <td>Oussama</td>
              <td>Genie Logiciel</td>
              <td style={{ borderRight: '1px solid white' }}>1</td>
            </tr>
            <tr>
              <td>2300034</td>
              <td>14423248</td>
              <td>benslama@gmail.com</td>
              <td>Ben slama</td>
              <td>Oussama</td>
              <td>Genie Logiciel</td>
              <td style={{ borderRight: '1px solid white' }}>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfList;
