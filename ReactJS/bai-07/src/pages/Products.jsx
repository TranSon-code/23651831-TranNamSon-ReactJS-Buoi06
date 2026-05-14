import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'iPhone 15 Pro', price: '29.990.000đ' },
  { id: 2, name: 'Samsung S24 Ultra', price: '26.500.000đ' },
  { id: 3, name: 'Macbook M3 Air', price: '32.000.000đ' },
];

const Products = () => (
  <div>
    <h2>Danh sách sản phẩm</h2>
    <div style={{ display: 'grid', gap: '15px' }}>
      {products.map(p => (
        <div key={p.id} style={{ padding: '10px', border: '1px solid #ddd' }}>
          <h4>{p.name}</h4>
          <Link to={`/products/${p.id}`}>Xem chi tiết</Link>
        </div>
      ))}
    </div>
  </div>
);
export default Products;