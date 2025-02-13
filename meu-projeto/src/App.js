import logo from './logo.svg';
import './App.css';
import Frase from './components/frase';
import Evento from './components/Evento';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
        <Form/>
        <Evento numero={1}/>
        <Evento numero={2}/>
    </div>
  );
}

export default App;
