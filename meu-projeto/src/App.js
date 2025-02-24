import {BrowserRouter as Router, Routes ,Route,Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './components/Pages/Home';
import Empresa from './components/Pages/Empresa';
import Contato from './components/Pages/Contato';
function App() {

  return (
    <Router>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/Empresa'>
          <li>Empresa</li>
        </Link>
        <Link to='Contato'>
          <li>Contato</li>
        </Link>
      </ul>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Empresa' element={<Empresa/>}></Route>
        <Route path='/Contato' element={<Contato/>}></Route>
      </Routes>


    </Router>
  );
}

export default App;
