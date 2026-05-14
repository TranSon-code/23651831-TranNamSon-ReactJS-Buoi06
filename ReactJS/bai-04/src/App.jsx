import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import { Dashboard, Profile, Orders, Settings } from './components/Dashboard';

function App() {
  const navStyle = {
    padding: '15px',
    backgroundColor: '#2c3e50',
    display: 'flex',
    gap: '20px'
  };

  return (
    <BrowserRouter>
      {/* Thanh điều hướng chính của Web */}
      <nav style={navStyle}>
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Home</Link>
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/dashboard">Dashboard</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Route lồng nhau: Dashboard là cha */}
          <Route path="/dashboard" element={<Dashboard />}>
            {/* Các con: path không cần dấu "/" ở đầu vì nó nối sau /dashboard */}
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          <Route path="*" element={<h2>404 - Trang không tồn tại</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;