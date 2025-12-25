import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import SearchBar from '../products/SearchBar';
import ProductCard from '../products/ProductCard';
import BottomNav from '../layout/BottomNav';

const Home = ({ onNavigate }) => {
  const { products, cart, setCart, wishlist, setWishlist } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert('Added to cart!');
  };

  const toggleWishlist = (product) => {
    const isInWishlist = wishlist.find(item => item.id === product.id);
    if (isInWishlist) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-blue-500 text-white p-4">
        <h1 className="text-xl font-bold text-center">Second Life Store</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {/* Products Grid */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
            onToggleWishlist={toggleWishlist}
            isInWishlist={wishlist.find(item => item.id === product.id)}
          />
        ))}
      </div>

      <BottomNav 
        onNavigate={onNavigate}
        cartCount={cart.length}
        wishlistCount={wishlist.length}
      />
    </div>
  );
};

export default Home;