import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Orders = ({ onNavigate }) => {
  const { orders } = useContext(AuthContext);

  return (
    <div className="p-4 pb-20">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
      
      {orders.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No orders yet</p>
          <button
            onClick={() => onNavigate('home')}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        orders.map(order => (
          <div key={order.id} className="bg-white rounded-lg shadow-md p-4 mb-3 border">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold">Order #{order.id}</span>
              <span className="text-sm text-gray-600">{order.date}</span>
            </div>
            <div className="space-y-2">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center text-sm">
                  <span className="mr-2">{item.image}</span>
                  <span>{item.name}</span>
                  <span className="ml-auto">
                    {item.price === 0 ? 'FREE' : `₹${item.price}`}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t pt-2 mt-2 font-bold">
              Total: ₹{order.total}
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

export default Orders;