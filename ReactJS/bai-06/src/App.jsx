import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login';
import { Profile, Orders } from './components/Profile';

// Component Bảo Vệ
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    // Nếu chưa login, redirect về trang login ngay lập tức
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <nav style={{ padding: '15px', background: '#333', display: 'flex', gap: '20px' }}>
          <Link style={{ color: 'white' }} to="/profile">Profile</Link>
          <Link style={{ color: 'white' }} to="/orders">Orders</Link>
        </nav>

        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            
            {/* Bảo vệ các trang này bằng cách bọc chúng lại */}
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            
            <Route path="/orders" element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            } />

            <Route path="*" element={<h2>Vui lòng chọn trang</h2>} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;