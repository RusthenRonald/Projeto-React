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
      <Saudacao/>
    </div>
  );
}

export default App;
