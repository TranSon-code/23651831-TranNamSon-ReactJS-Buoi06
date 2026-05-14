import { useShop } from '../context/ShopContext';

const Profile = () => {
  const { user, logout } = useShop();
  return (
    <div style={{ background: '#e8f5e9', padding: '20px' }}>
      <h2>Thông tin cá nhân</h2>
      <p>Xin chào: <strong>{user?.name}</strong></p>
      <p>Mã SV: {user?.id}</p>
      <button onClick={logout} style={{ background: 'red', color: '#fff' }}>Đăng xuất</button>
    </div>
  );
};
export default Profile;