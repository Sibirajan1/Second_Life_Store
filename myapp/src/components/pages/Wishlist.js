import React, { useContext } from 'react';
import { Heart } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';

const Wishlist = ({ onNavigate }) => {
  const { wishlist, setWishlist, cart, setCart } = useContext(AuthContext);

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert('Added to cart!');
  };

  return (
    <div className="p-4 pb-20">
      <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>
      
      {wishlist.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Your wishlist is empty</p>
          <button
            onClick={() => onNavigate('home')}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg"
          >
            Browse Products
          </button>
        </div>
      ) : (
        wishlist.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4 mb-3 border">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-3xl mr-3">{item.image}</span>
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-blue-600 font-bold">
                    {item.price === 0 ? 'FREE' : `₹${item.price}`}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => addToCart(item)}
                  className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-500 hover:bg-red-100 p-2 rounded"
                >
                  <Heart className="h-4 w-4 fill-current" />
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      
      <button
        onClick={() => onNavigate('home')}
        className="mt-4 text-blue-500 hover:underline"
      >
        ← Back to Home
      </button>
    </div>
  );
};

export default Wishlist;