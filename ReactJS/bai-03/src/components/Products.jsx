import { Link } from 'react-router-dom';

const Products = () => {
  const productList = [
    { id: 1, name: 'Iphone' },
    { id: 2, name: 'Samsung' },
    { id: 3, name: 'Laptop' },
  ];

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {productList.map((prod) => (
          <li key={prod.id}>
            {/* Đường dẫn động: /products/1, /products/2... */}
            <Link to={`/products/${prod.id}`}>{prod.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;