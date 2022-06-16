import "./App.css";
import {
  Home,
  Education,
  Experience,
  Project,
  Certifications,
} from "../src/pages/index";
import Navbar from "../src/components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar className="" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/certifications" element={<Certifications />} />
          <Route exact path="/projects" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}
