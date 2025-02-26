import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/Layout/Container";
function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/company'>Company</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/newproject'>NewProject</Link>
      </div>

      <Container customClass="min_height">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/company" element={<Company/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/newproject" element={<NewProject/>}></Route>
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
