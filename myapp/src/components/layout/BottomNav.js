import React from 'react';
import { ShoppingCart, Heart, Package, Plus } from 'lucide-react';

const BottomNav = ({ onNavigate, cartCount, wishlistCount }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
      <div className="flex justify-around">
        <button
          onClick={() => onNavigate('cart')}
          className="flex flex-col items-center py-2 px-4"
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="text-xs mt-1">Cart ({cartCount})</span>
        </button>
        <button
          onClick={() => onNavigate('orders')}
          className="flex flex-col items-center py-2 px-4"
        >
          <Package className="h-5 w-5" />
          <span className="text-xs mt-1">Orders</span>
        </button>
        <button
          onClick={() => onNavigate('wishlist')}
          className="flex flex-col items-center py-2 px-4"
        >
          <Heart className="h-5 w-5" />
          <span className="text-xs mt-1">Wishlist ({wishlistCount})</span>
        </button>
        <button
          onClick={() => onNavigate('sell')}
          className="flex flex-col items-center py-2 px-4"
        >
          <Plus className="h-5 w-5" />
          <span className="text-xs mt-1">Sell</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;