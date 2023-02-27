import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Homme from "./pages/Homme";
import Femme from "./pages/Femme";
import About from "./pages/About";
import Programmes from "./pages/Programme";


import Shopping from "./pages/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; //Syteme de route pour naviguer entre les differentes pages sans rafraichissement.


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
          <Route path="/programme" element={<Programmes/>} />
          <Route path="/cart" element={<Shopping/>} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
    
  );
}

export default App;
