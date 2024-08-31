import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import AttestationForm from '../components/Attestation/AttestationForm';


const Attestation= () => {
  return (
   <div style={{ position:'relative'}}>
     <div style={{ display: 'flex', position:'relative'}}>
        <Navbar/>
        <div style={{ width: '100%', flexBasis: '80%' }}>
          <Header/>
          <AttestationForm />
        </div>
    </div> 
   </div>
  );
};


export default Attestation;
