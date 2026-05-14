import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#28a745' }}>🎉 Thanh toán thành công!</h2>
      <p>Cảm ơn Sơn đã mua hàng tại hệ thống.</p>
      <Link to="/">Quay về trang chủ</Link>
    </div>
  );
};

export default Checkout;