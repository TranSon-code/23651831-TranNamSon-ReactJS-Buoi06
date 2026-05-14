import { useShop } from '../context/ShopContext';

const Cart = () => {
  const { cart } = useShop();
  return (
    <div>
      <h2>Giỏ hàng của bạn ({cart.length})</h2>
      {cart.length === 0 ? <p>Giỏ hàng trống</p> : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - {item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Cart;