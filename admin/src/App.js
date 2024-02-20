import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/Login'
import Main from './pages/Main'
import Formation from './pages/Formation'
import AddFormation from './pages/AddFormation'
import AddActualites from './pages/AddActualites';
import Departement from './pages/Departement'
import AddDepartement from './pages/AddDepartement'
import DepartmentEdit from './pages/EditDepartment'
import Students from './pages/Students';
import Specialite from './pages/Specialite';
import AddStudent from './pages/AddStudent';
import Proffessors from './pages/Proffessors';
import AddProfs from './pages/AddProfs';
import Groupes from './pages/Groupes';
import AddEmploi from './pages/AddEmploi';
import ListDep from './pages/ListDep';
import AddProftotd from './pages/AddProftotd';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Login />} />
        <Route path="/main"  element={<Main />} />
        <Route path="/formation"  element={<Formation />} />
        <Route path="/formation/addformation"  element={<AddFormation />} />
        <Route path="/actualites/add"  element={<AddActualites />} />
        <Route path="/departement" element={<Departement />} />
        <Route path="/departement/adddepartement"  element={<AddDepartement />} />
        <Route path="/departement/editdepartement/:id"  element={<DepartmentEdit />} />
        <Route path="/groupes"  element={<Groupes />} />
        <Route path="/td/emploi/"  element={<AddEmploi />} />
        <Route path="/td/prof/"  element={<AddProftotd />} />


         {/* student section */}
         <Route path="/etudiants" element={<Students />} />
         <Route path="/addstudent" element={<AddStudent />} />

         <Route path="/specialite" element={<Specialite />} />
          <Route path="/specialite/:speciality/:level" element={<Students />} />


         {/* profs section */}
         <Route path="/enseignants" element={<ListDep />} />
         <Route path="/addenseignants" element={<AddProfs />} />
      </Routes>
  </Router>
  );
}

export default App;
