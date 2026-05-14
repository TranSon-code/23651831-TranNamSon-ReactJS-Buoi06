import { createContext, useState, useContext } from 'react';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const login = () => setUser({ name: "Nam Sơn" , id: "23651831" });
  const logout = () => setUser(null);
  
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`Đã thêm ${product.name} vào giỏ!`);
  };

  return (
    <ShopContext.Provider value={{ user, login, logout, cart, addToCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);