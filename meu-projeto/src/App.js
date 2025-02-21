import logo from './logo.svg';
import './App.css';
import Lista from './components/Lista';
function App() {

  const minhalista= ['React','Vue','Js']

  return (
    <div className="App">
        <h1>Renderização de Listas</h1>
        <Lista itens={minhalista}/>
        <Lista itens={[]}/>
    </div>
  );
}

export default App;
