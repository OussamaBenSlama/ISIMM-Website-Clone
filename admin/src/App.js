import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/Login'
import Main from './pages/Main'
import Formation from './pages/Formation'
import AddFormation from './pages/AddFormation'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Login />} />
        <Route path="/main"  element={<Main />} />
        <Route path="/formation"  element={<Formation />} />
        <Route path="/formation/addformation"  element={<AddFormation />} />
      </Routes>
  </Router>
  );
}

export default App;
