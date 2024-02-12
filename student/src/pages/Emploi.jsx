import React from 'react';
import Navbar from '../components/Main/Navbar';
import Header from '../components/Main/Header'
import EmploiForm from '../components/Emploi/EmploiForm';


const Emploi= () => {
  return (
   <div style={{ position:'relative'}}>
     <div style={{ display: 'flex', position:'relative'}}>
        <Navbar/>
        <div style={{ width: '100%', flexBasis: '80%' }}>
          <Header/>
          <EmploiForm/>
        </div>
    </div> 
   </div>
  );
};


export default Emploi;
