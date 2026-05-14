import { Link, Outlet } from 'react-router-dom';

// Các trang con hiển thị bên trong Dashboard
const Profile = () => <div style={{ padding: '15px', background: '#e3f2fd' }}>👤 Trang cá nhân: Trần Nam Sơn</div>;
const Orders = () => <div style={{ padding: '15px', background: '#fff3e0' }}>📦 Danh sách đơn hàng: (Trống)</div>;
const Settings = () => <div style={{ padding: '15px', background: '#f1f8e9' }}>⚙️ Cài đặt tài khoản</div>;

const Dashboard = () => {
  const sidebarStyle = {
    width: '200px',
    padding: '20px',
    background: '#f8f9fa',
    minHeight: '200px',
    borderRadius: '8px'
  };

  return (
    <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
      {/* Menu Sidebar của Dashboard */}
      <aside style={sidebarStyle}>
        <h3>Menu</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <Link to="profile">Profile</Link>
          <Link to="orders">Orders</Link>
          <Link to="settings">Settings</Link>
        </nav>
      </aside>

      {/* CỰC KỲ QUAN TRỌNG: Nội dung các Route con sẽ được đổ vào Outlet này */}
      <main style={{ flex: 1, border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
        <Outlet />
      </main>
    </div>
  );
};

export { Dashboard, Profile, Orders, Settings };