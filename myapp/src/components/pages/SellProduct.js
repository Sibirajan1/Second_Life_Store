import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const SellProduct = ({ onNavigate }) => {
  const { products, setProducts, user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '', description: '', price: '', features: ''
  });
  const [isFree, setIsFree] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.description) {
      alert('Please fill in required fields');
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: formData.name,
      description: formData.description,
      price: isFree ? 0 : parseInt(formData.price) || 0,
      image: "📦", // Default image for new products
      seller: user?.email || "anonymous@email.com",
      features: formData.features
    };

    setProducts([...products, newProduct]);
    alert('Product listed successfully!');
    setFormData({ name: '', description: '', price: '', features: '' });
    setIsFree(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 pb-20">
      <h2 className="text-2xl font-bold mb-4">Sell Your Product</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Product Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder="Describe your product"
          />
        </div>

        <div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="free"
              checked={isFree}
              onChange={(e) => setIsFree(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="free" className="text-sm">Give away for free</label>
          </div>
          
          {!isFree && (
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter price in ₹"
              min="0"
            />
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Features (Optional)</label>
          <input
            type="text"
            name="features"
            value={formData.features}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Good condition, 2 years old"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          List Product
        </button>
      </div>
      
      <button
        onClick={() => onNavigate('home')}
        className="mt-4 text-blue-500 hover:underline"
      >
        ← Back to Home
      </button>
    </div>
  );
};

export default SellProduct;