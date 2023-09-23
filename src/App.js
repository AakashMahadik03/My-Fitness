import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Class from './components/Class';
import Footer from './components/Footer';
import Product from './components/Product';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTop /> {/* Add ScrollToTop component to handle scrolling */}
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/schedule" element={<Schedule />} />
          <Route exact path="/classes" element={<Class />} />
          <Route exact path="/products" element={<Product />} />

          {/* Add more routes for other pages */}
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
