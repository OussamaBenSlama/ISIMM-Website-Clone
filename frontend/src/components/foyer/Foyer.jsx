import React, { useState, useEffect } from 'react';
import './style/foyer.css'
import fattouma from '../../images/foyers/fattouma.jpeg';
import aout from '../../images/foyers/3aout.png';
import imemmezri  from '../../images/foyers/imemmezri.jpeg';
import basatine from '../../images/foyers/basatine.jpg';
import { FaMapMarker, FaPhone, FaInfoCircle } from 'react-icons/fa';

 
 
 
 
 
  
export default function Foyer() {
 const Data = [
    {
      id: 1,
      imageSrc: fattouma,
      name: 'CITE UNIVERSITAIRE FATTOUMA BOURGUIBA',
      address: 'Stah Jabeur 5000 Monastir, Monastir',
      phoneNumber: ' 73 460 143 / 73 460 142',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      id: 2,
      imageSrc: aout,
      name: 'FOYER UNIVERSITAIRE 3 AOUT',
      address: ' Avenue Ibn Sina 5000 Monastir, Monastir',
      phoneNumber: ' 73 460 739 / 73 461 977',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      id: 3,
      imageSrc: imemmezri,
      name: 'IMAM MEZRI',
      address: 'rte de Kairouan 5000 Monastir, Monastir',
      phoneNumber: ' 73 500 250 / 73 461 977',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      id: 4,
      imageSrc: basatine,
      name: 'FOYER UNIVERSITAIRE EL BASSATINE',
      address: 'Cité Bassatine 5000 Monastir, Monastir',
      phoneNumber: ' 73 461 648 / 73 461 989',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
  ];

 
 return (
    <div className='foyer_container'>
       <h2  >Les Foyers Universitaires à Monastir</h2>
      <div className='foyers'>
        {Data.map((item, index) => (
          <div key={index} className='foyer' >
            <div className='foyer_header'>
            <img src={item.imageSrc}   />
            </div>
            <div className='foyer_description'>
              <span style={{ fontWeight: 'bold', color: 'rgb(75, 74, 74)', fontSize: '1.2rem' }}>
                  {item.name}
              </span><br/>
              <span><FaMapMarker  className='iconn' />{item.address}</span><br/>
              <span><FaPhone  className='iconn' />{item.phoneNumber}</span>
              <p><FaInfoCircle  className='iconn' />{item.description } </p>
               
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}
