import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Cart = ({ onNavigate }) => {
  const { cart, setCart, orders, setOrders } = useContext(AuthContext);

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const checkout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    
    const order = {
      id: Date.now(),
      items: [...cart],
      total: cart.reduce((sum, item) => sum + item.price, 0),
      date: new Date().toLocaleDateString()
    };
    
    setOrders([...orders, order]);
    setCart([]);
    alert('Order placed successfully! (Demo payment completed)');
    onNavigate('orders');
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4 pb-20">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Your cart is empty</p>
          <button
            onClick={() => onNavigate('home')}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-3 border">
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
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:bg-red-100 p-2 rounded-lg"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold">Total: ₹{total}</span>
            </div>
            <button
              onClick={checkout}
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
            >
              Buy Now (Demo Payment)
            </button>
          </div>
        </>
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

export default Cart;