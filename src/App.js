import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Homme from "./pages/Homme";
import Femme from "./pages/Femme";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shopping from "./pages/Shopping";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homme" element={<Homme/>} />
          <Route path="/femme" element={<Femme/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/shopping" element={<Shopping/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
