import React from 'react';
import { Heart } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, onToggleWishlist, isInWishlist }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border">
      <div className="text-6xl text-center mb-2">{product.image}</div>
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
      <p className="text-blue-600 font-bold">
        {product.price === 0 ? 'FREE' : `₹${product.price}`}
      </p>
      {product.features && (
        <p className="text-xs text-gray-500 mt-1">{product.features}</p>
      )}
      <p className="text-xs text-gray-400 mt-1">Seller: {product.seller}</p>
      
      <div className="flex gap-2 mt-3">
        <button
          onClick={() => onAddToCart(product)}
          className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm hover:bg-blue-600"
        >
          Add to Cart
        </button>
        <button
          onClick={() => onToggleWishlist(product)}
          className={`p-2 rounded-lg ${
            isInWishlist
              ? 'bg-red-100 text-red-500'
              : 'bg-gray-100 text-gray-500'
          }`}
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;