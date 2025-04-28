import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/Layout/Container";
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";
function App() {
  return (
    <Router>
      <NavBar/>

      <Container customClass="min_height">
        <Routes> 
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/company" element={<Company/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/newproject" element={<NewProject/>}></Route>
          <Route path="/project/:id" element={<Project/>}></Route>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
