import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { ShopProvider, useShop } from './context/ShopContext';

// Import Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Profile from './pages/Profile';

// Component bảo vệ trang Profile
const ProtectedRoute = ({ children }) => {
  const { user } = useShop();
  return user ? children : <Navigate to="/login" replace />;
};

function Navbar() {
  const { cart, user } = useShop();
  return (
    <nav style={{ background: '#2c3e50', padding: '1rem', display: 'flex', gap: '20px' }}>
      <Link style={{ color: 'white' }} to="/">Home</Link>
      <Link style={{ color: 'white' }} to="/products">Shop</Link>
      <Link style={{ color: 'white' }} to="/cart">Cart ({cart.length})</Link>
      <Link style={{ color: 'white' }} to="/profile">Profile</Link>
      {user && <span style={{ color: 'yellow', marginLeft: 'auto' }}>Hi, {user.name}</span>}
    </nav>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <Navbar />
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
}