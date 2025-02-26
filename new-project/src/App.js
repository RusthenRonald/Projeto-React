import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/company" element={<Company/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/newproject" element={<NewProject/>}></Route>
      </Routes>
      <p>Footer</p>
    </Router>
  );
}

export default App;
