import {BrowserRouter as Router , Routes, Route ,Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './components/Pages/Home';
import Empresa from './components/Pages/Empresa';
import Contato from './components/Pages/Contato';
function App() {

  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/empresa'>Empresa</Link>
        </li>
        <li>
          <Link to='/contato'>Contato</Link>
        </li>
      </ul>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/empresa' element={<Empresa/>}></Route>
          <Route path='/contato' element={<Contato/>}></Route>
        </Routes>

    </Router>
  );
}

export default App;
