import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';

function App() {
  const navStyle = {
    padding: '15px',
    backgroundColor: '#34495e',
    marginBottom: '20px'
  };

  return (
    <BrowserRouter>
      <nav style={navStyle}>
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Sản phẩm</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          {/* Mặc định vào trang chi tiết sản phẩm */}
          <Route path="/" element={<ProductDetail />} />
          
          {/* Trang checkout */}
          <Route path="/checkout" element={<Checkout />} />

          <Route path="*" element={<h2>404 - Không tìm thấy</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;