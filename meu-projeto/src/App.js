import {BrowserRouter as Router , Switch , Route ,Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
function App() {

  return (
    <Router>
      <ul>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/empresa'>Empresa</Link>
        </li>
        <li>
          <Link to='/contato'>Contato</Link>
        </li>
      </ul>
    </Router>
  );
}

export default App;
