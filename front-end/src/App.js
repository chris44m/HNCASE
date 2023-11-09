
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import AgregarEquipo from './Equipos/AgregarEquipo';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">

      <Router>
      <Navbar />

      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/agregarequipos' element={<AgregarEquipo/>}/>
      </Routes>
      

      </Router>

      
    </div>
  );
}

export default App;
