// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Formation_ing from './pages/Formation_ing'
import Formation_mastere from './pages/Formation_mastere'
import Formation_liscence from './pages/Formation_liscence'
import Formation_prepa from './pages/Formation_prepa'
import Actualites from './pages/Actualites'
import Departements from './pages/Departements';
import Bibliotheque from './pages/Bibliotheque';
import Departement_info from './pages/Departement_info';
import Departement_tech from './pages/Departement_tech';
import Departement_mat from './pages/Departement_mat';
import Foyers from './pages/Foyers';
import Contact from './pages/Contact'
import Presentation from './pages/PresentationPage';


 
const App = () => {
  
 

  return (
    <Router>
        <div className="App">
           <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/formation_ing' element={<Formation_ing/>}/>
             <Route path='/formation_mastere' element={<Formation_mastere/>}/>
             <Route path='/formation_liscence' element={<Formation_liscence/>}/>
             <Route path='/formation_prepa' element={<Formation_prepa/>}/>
             <Route path='/actualites' element={<Actualites/>}/>
             <Route path='/contact' element={<Contact/>}/>

             <Route path='/bibliotheque' element={<Bibliotheque/>}/>

             <Route path='/departements' element={<Departements/>}/>
             <Route path='/departement/informatique' element={<Departement_info/>}/>
             <Route path='/departement/mathematique' element={<Departement_mat/>}/>
             <Route path='/departement/technologique' element={<Departement_tech/>}/>
             <Route path='/foyers' element={<Foyers/>}/>
             <Route path='/presentation' element={<Presentation/>}/>


           </Routes>
        </div>
    </Router>
  );
};

export default App;