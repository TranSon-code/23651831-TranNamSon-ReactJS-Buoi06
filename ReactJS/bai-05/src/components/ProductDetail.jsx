import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const navigate = useNavigate(); // Khởi tạo hook điều hướng

  const handleBuy = () => {
    // Giả sử ở đây có logic xử lý API đặt hàng...
    alert("Đang xử lý đơn hàng...");

    // Sau khi xử lý xong, điều hướng sang trang checkout bằng code
    navigate("/checkout");
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>📱 Chi tiết sản phẩm: iPhone 15 Pro</h2>
      <p>Giá: 29.990.000đ</p>
      <button 
        onClick={handleBuy}
        style={{ padding: '10px 20px', background: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Mua hàng ngay
      </button>
    </div>
  );
};

export default ProductDetail;