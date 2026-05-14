import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  // useParams trả về một object chứa các tham số động trên URL
  // Tên 'id' phải khớp với tên bạn đặt trong Route ở App.jsx
  const { id } = useParams();

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
      <h3>Trang chi tiết sản phẩm</h3>
      <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#007bff' }}>
        Product ID: {id}
      </p>
      <Link to="/products">← Quay lại danh sách</Link>
    </div>
  );
};

export default ProductDetail;