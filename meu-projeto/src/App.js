import logo from './logo.svg';
import './App.css';
import OutraLista from './components/OutraLista';
function App() {

  const minhalista =['React','Vue','Js']

  return (
    <div className="App">
      <h1>Renderizando Listas</h1>
      <OutraLista Lista={minhalista}/>
      <OutraLista Lista={[]}/>
    </div>
  );
}

export default App;
