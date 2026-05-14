import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/profile"); // Login xong cho qua trang Profile luôn
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Trang Đăng Nhập</h2>
      <button onClick={handleLogin}>Bấm để Đăng Nhập</button>
    </div>
  );
};
export default Login;