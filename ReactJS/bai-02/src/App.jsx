import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound'; // Import vào đây

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '20px', backgroundColor: '#282c34' }}>
        <Link style={{ color: 'white', marginRight: '15px' }} to="/">Home</Link>
        <Link style={{ color: 'white', marginRight: '15px' }} to="/about">About</Link>
        <Link style={{ color: 'white' }} to="/contact">Contact</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Tấm lưới hứng mọi URL sai - Luôn để dưới cùng */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;