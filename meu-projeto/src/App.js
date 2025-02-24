import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import SeuNome from './components/SeuNome';
function App() {

  

  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome/>
    </div>
  );
}

export default App;
