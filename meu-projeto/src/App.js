import {BrowserRouter as Router, Routes ,Route,Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
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
    </Router>
  );
}

export default App;
