import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 12",
      description: "Used iPhone 12 in good condition",
      price: 35000,
      image: "📱",
      seller: "john@email.com",
      features: "64GB, Black Color"
    },
    {
      id: 2,
      name: "Gaming Chair",
      description: "Comfortable gaming chair, barely used",
      price: 8000,
      image: "🪑",
      seller: "gamer@email.com",
      features: "Ergonomic design"
    },
    {
      id: 3,
      name: "Books Set",
      description: "Programming books collection",
      price: 0,
      image: "📚",
      seller: "student@email.com",
      features: "Free to good home"
    }
  ]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [orders, setOrders] = useState([]);

  return (
    <AuthContext.Provider value={{
      user, setUser, products, setProducts, cart, setCart, 
      wishlist, setWishlist, orders, setOrders
    }}>
      {children}
    </AuthContext.Provider>
  );
};