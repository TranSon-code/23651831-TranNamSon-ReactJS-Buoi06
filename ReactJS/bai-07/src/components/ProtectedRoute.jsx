import { Navigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useShop();
  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;