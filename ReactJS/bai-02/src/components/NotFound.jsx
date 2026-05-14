import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1 style={{ fontSize: '72px', color: '#ff4d4d' }}>404</h1>
      <h2>Oops! Trang này không tồn tại.</h2>
      <p>Có vẻ như Sơn đã nhập sai đường dẫn rồi.</p>
      <Link to="/" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
        Quay lại Trang Chủ
      </Link>
    </div>
  );
};

export default NotFound;