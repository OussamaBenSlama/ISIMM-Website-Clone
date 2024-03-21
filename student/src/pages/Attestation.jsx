import React from 'react';
import Navbar from '../components/Main/Navbar';
import Header from '../components/Main/Header'


const Attestation= () => {
  return (
   <div style={{ position:'relative'}}>
     <div style={{ display: 'flex', position:'relative'}}>
        <Navbar/>
        <div style={{ width: '100%', flexBasis: '80%' }}>
          <Header/>
          {/* <AttestationForm/> */}
        </div>
    </div> 
   </div>
  );
};


export default Attestation;
