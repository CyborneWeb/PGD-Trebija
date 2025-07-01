import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./Pages/Home";
import BackToTop from "./components/Buttons/BackToTop";

function App() {
 

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <BackToTop />

        <Footer />
      </div>
    </Router>
  );
}

// Placeholder components for routes

const About = () => <h1 className="text-3xl font-bold">About Page</h1>;
const Services = () => <h1 className="text-3xl font-bold">Services Page</h1>;
const Gallery = () => <h1 className="text-3xl font-bold">Gallery Page</h1>;
const Contact = () => <h1 className="text-3xl font-bold">Contact Page</h1>;

export default App;
