import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '20px', background: '#eee', display: 'flex', gap: '20px' }}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Trang danh sách */}
          <Route path="/products" element={<Products />} />
          
          {/* Trang chi tiết - Dùng tham số động :id */}
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;