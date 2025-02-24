import {BrowserRouter as Router , Switch , Route ,Link} from 'react-router-dom'
import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
function App() {

  const [nome,setNome]=useState()

  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      {nome}
      <Saudacao nome={nome}/>
    </div>
  );
}

export default App;
