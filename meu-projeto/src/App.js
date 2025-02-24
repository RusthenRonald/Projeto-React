import {BrowserRouter as Router, Routes ,Route,Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './components/Pages/Home';
import Empresa from './components/Pages/Empresa';
import Contato from './components/Pages/Contato';
import Navbar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer';
function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Empresa' element={<Empresa/>}></Route>
        <Route path='/Contato' element={<Contato/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
