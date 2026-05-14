import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useShop();
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Đăng nhập để xem Profile</h2>
      <button onClick={() => { login(); navigate('/profile'); }} style={{ padding: '10px 20px' }}>
        Đăng nhập ngay
      </button>
    </div>
  );
};
export default Login;