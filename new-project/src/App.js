import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
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
