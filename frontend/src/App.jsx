import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./Pages/Home";
import BackToTop from "./components/Buttons/BackToTop";
import CookieModal from "./components/Modals/CookieModal";
import Contact from "./Pages/Contact";
import ScrollToTop from "./components/Other/ScrollToTop";
import {ToastContainer} from "react-toastify";
import { useTheme } from "./Contexts/ThemeContext";


function App() {
  const { theme } = useTheme();
 

  return (
    <div>
      
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={theme}
          />
          
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/drustvo" element={<About />} />
              <Route path="/obvestila" element={<Posts />} />
              <Route path="/galerija" element={<Gallery />} />
              <Route path="/kontakt" element={<Contact />} />
            </Routes>
          </main>
          <BackToTop />
          <CookieModal />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

// Placeholder components for routes

const About = () => <h1 className="text-3xl font-bold">O Društvu - izdelava še poteka</h1>;
const Posts = () => <h1 className="text-3xl font-bold">Obvestila - izdelava še poteka</h1>;
const Gallery = () => <h1 className="text-3xl font-bold">Galerija - izdelava še poteka</h1>;


export default App;
