import { useParams, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useShop();

  // Giả lập tìm sản phẩm theo ID
  const product = { id, name: `Sản phẩm mẫu ${id}`, price: '10.000.000đ' };

  const handleBuy = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div style={{ padding: '20px', border: '2px solid #333' }}>
      <h3>Chi tiết sản phẩm ID: {id}</h3>
      <p>Tên: {product.name}</p>
      <p>Giá: {product.price}</p>
      <button onClick={handleBuy} style={{ background: 'orange', padding: '10px' }}>
        THÊM VÀO GIỎ & THANH TOÁN
      </button>
    </div>
  );
};
export default ProductDetail;