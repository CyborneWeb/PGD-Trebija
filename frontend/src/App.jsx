import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
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
