import logo from './logo.svg';
import './App.css';
import Frase from './components/frase';
import Carro from './components/Carro';
function App() {
  return (
    <div className="App">
        <Frase/>
        <Carro ano_lançamento={1999} marca="rusthen"/>
    </div>
  );
}

export default App;
