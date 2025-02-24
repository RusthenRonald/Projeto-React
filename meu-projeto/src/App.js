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
        <li>Empresa</li>
        <li>Contato</li>
      </ul>
    </Router>
  );
}

export default App;
