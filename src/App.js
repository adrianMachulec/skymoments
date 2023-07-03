import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import AboutMe from "./pages/AboutMe/AboutMe";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
