import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  // Style đơn giản cho Menu
  const navStyle = {
    padding: '20px',
    backgroundColor: '#282c34',
    marginBottom: '20px'
  };

  const linkStyle = {
    color: 'white',
    marginRight: '15px',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  return (
    <BrowserRouter>
      {/* Menu điều hướng */}
      <nav style={navStyle}>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/about">About</Link>
        <Link style={linkStyle} to="/contact">Contact</Link>
      </nav>

      {/* Khu vực hiển thị nội dung các trang */}
      <div style={{ padding: '0 20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;