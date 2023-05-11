import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from 'react-router-dom';
import Restaurant  from "./pages/Restaurants";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Footer from "./components/footer/footer";

function App() {
  return (
    <div >
  <Navbar />
  <div className="App">
  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
 </div>
  <Footer />      
       
      
    </div>
  );
}

export default App;
