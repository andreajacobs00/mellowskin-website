
'use client';

import { useState } from 'react';
import { useCart } from '@/components/CartContext';

export default function ProductGrid() {
  const [quantities, setQuantities] = useState<{[key: number]: number}>({});
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: 'Lavender Dreams',
      price: 24.99,
      originalPrice: 29.99,
      image: 'https://readdy.ai/api/search-image?query=Elegant%20glass%20jar%20containing%20creamy%20lavender-colored%20body%20butter%2C%20surrounded%20by%20fresh%20lavender%20sprigs%20and%20purple%20flowers%2C%20soft%20natural%20lighting%2C%20clean%20white%20background%2C%20luxury%20skincare%20product%20photography%2C%20professional%20beauty%20shot%20with%20pastel%20purple%20and%20white%20color%20scheme&width=400&height=400&seq=product-lavender&orientation=squarish',
      description: 'Soothing lavender-infused body butter for relaxation and stress relief',
      ingredients: 'Shea butter, lavender essential oil, coconut oil',
      inStock: true,
      rating: 4.9,
      reviews: 127
    },
    {
      id: 2,
      name: 'Vanilla Bliss',
      price: 26.99,
      originalPrice: 31.99,
      image: 'https://readdy.ai/api/search-image?query=Premium%20glass%20jar%20with%20creamy%20vanilla-colored%20body%20butter%2C%20surrounded%20by%20vanilla%20beans%20and%20warm%20cream%20tones%2C%20soft%20natural%20lighting%2C%20clean%20white%20background%2C%20luxury%20skincare%20product%20photography%2C%20professional%20beauty%20shot%20with%20warm%20beige%20and%20cream%20color%20scheme&width=400&height=400&seq=product-vanilla&orientation=squarish',
      description: 'Rich vanilla-scented body butter for deep moisturizing and comfort',
      ingredients: 'Cocoa butter, vanilla extract, sweet almond oil',
      inStock: true,
      rating: 4.8,
      reviews: 203
    },
    {
      id: 3,
      name: 'Citrus Burst',
      price: 23.99,
      originalPrice: 27.99,
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20glass%20jar%20containing%20bright%20citrus-colored%20body%20butter%2C%20surrounded%20by%20fresh%20orange%20slices%20and%20lemon%20wedges%2C%20soft%20natural%20lighting%2C%20clean%20white%20background%2C%20luxury%20skincare%20product%20photography%2C%20professional%20beauty%20shot%20with%20vibrant%20orange%20and%20yellow%20color%20scheme&width=400&height=400&seq=product-citrus&orientation=squarish',
      description: 'Energizing citrus blend perfect for morning skincare routine',
      ingredients: 'Mango butter, orange essential oil, grapefruit extract',
      inStock: true,
      rating: 4.7,
      reviews: 89
    },
    {
      id: 4,
      name: 'Rose Garden',
      price: 28.99,
      originalPrice: 34.99,
      image: 'https://readdy.ai/api/search-image?query=Luxurious%20glass%20jar%20with%20rose-tinted%20body%20butter%2C%20surrounded%20by%20fresh%20pink%20roses%20and%20rose%20petals%2C%20soft%20natural%20lighting%2C%20clean%20white%20background%2C%20luxury%20skincare%20product%20photography%2C%20professional%20beauty%20shot%20with%20romantic%20pink%20and%20white%20color%20scheme&width=400&height=400&seq=product-rose&orientation=squarish',
      description: 'Romantic rose-infused body butter for ultimate luxury and elegance',
      ingredients: 'Rose hip oil, rose water, shea butter',
      inStock: true,
      rating: 5.0,
      reviews: 156
    },
    {
      id: 5,
      name: 'Coconut Paradise',
      price: 25.99,
      originalPrice: 29.99,
      image: 'https://readdy.ai/api/search-image?query=Premium%20glass%20jar%20with%20creamy%20white%20coconut%20body%20butter%2C%20surrounded%20by%20fresh%20coconut%20pieces%20and%20tropical%20leaves%2C%20soft%20natural%20lighting%2C%20clean%20white%20background%2C%20luxury%20skincare%20product%20photography%2C%20professional%20beauty%20shot%20with%20tropical%20white%20and%20green%20color%20scheme&width=400&height=400&seq=product-coconut&orientation=squarish',
      description: 'Tropical coconut body butter for intense hydration',
      ingredients: 'Coconut oil, coconut milk, vitamin E',
      inStock: true,
      rating: 4.9,
      reviews: 174
    },
    {
      id: 6,
      name: 'Honey Glow',
      price: 27.99,
      originalPrice: 32.99,
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20glass%20jar%20containing%20golden%20honey-colored%20body%20butter%2C%20surrounded%20by%20honeycomb%20and%20fresh%20flowers%2C%20soft%20natural%20lighting%2C%20clean%20white%20background%2C%20luxury%20skincare%20product%20photography%2C%20professional%20beauty%20shot%20with%20warm%20golden%20and%20amber%20color%20scheme&width=400&height=400&seq=product-honey&orientation=squarish',
      description: 'Nourishing honey-infused body butter for radiant skin',
      ingredients: 'Raw honey, beeswax, jojoba oil',
      inStock: false,
      rating: 4.8,
      reviews: 92
    },
    {
      id: 7,
      name: 'Mint Fresh',
      price: 24.99,
      originalPrice: 28.99,
      image: 'https://readdy.ai/api/search-image?query=Elegant%20glass%20jar%20with%20refreshing%20mint-green%20body%20butter%2C%20surrounded%20by%20fresh%20mint%20leaves%20and%20green%20botanical%20elements%2C%20soft%20natural%20lighting%2C%20clean%20white%20background%2C%20luxury%20skincare%20product%20photography%2C%20professional%20beauty%20shot%20with%20fresh%20green%20and%20white%20color%20scheme&width=400&height=400&seq=product-mint&orientation=squarish',
      description: 'Refreshing mint body butter for cooling and revitalization',
      ingredients: 'Peppermint oil, spearmint extract, aloe vera',
      inStock: true,
      rating: 4.6,
      reviews: 68
    },
    {
      id: 8,
      name: 'Chamomile Calm',
      price: 26.99,
      originalPrice: 30.99,
      image: 'https://readdy.ai/api/search-image?query=Premium%20glass%20jar%20containing%20soft%20chamomile-colored%20body%20butter%2C%20surrounded%20by%20fresh%20chamomile%20flowers%20and%20calming%20botanical%20elements%2C%20soft%20natural%20lighting%2C%20clean%20white%20background%2C%20luxury%20skincare%20product%20photography%2C%20professional%20beauty%20shot%20with%20gentle%20yellow%20and%20white%20color%20scheme&width=400&height=400&seq=product-chamomile&orientation=squarish',
      description: 'Gentle chamomile body butter for sensitive skin',
      ingredients: 'Chamomile extract, calendula oil, oat extract',
      inStock: true,
      rating: 4.9,
      reviews: 134
    }
  ];

  const updateQuantity = (productId: number, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, quantity)
    }));
  };

  const getQuantity = (productId: number) => quantities[productId] || 1;

  const handleAddToCart = (product: any) => {
    const quantity = getQuantity(product.id);
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    }, quantity);

    // Reset quantity after adding to cart
    setQuantities(prev => ({
      ...prev,
      [product.id]: 1
    }));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <p className="text-gray-600">Showing {products.length} products</p>
        <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm pr-8">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Customer Rating</option>
          <option>Newest First</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow group overflow-hidden border border-gray-100">
            <div className="aspect-square overflow-hidden relative">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              {!product.inStock && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Out of Stock
                </div>
              )}
              {product.originalPrice > product.price && (
                <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Sale
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'} text-sm`}></i>
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.reviews})</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>

              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {product.description}
              </p>

              <p className="text-xs text-gray-500 mb-4">
                <strong>Key ingredients:</strong> {product.ingredients}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-pink-600">
                    ${product.price}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-lg text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button 
                    onClick={() => updateQuantity(product.id, getQuantity(product.id) - 1)}
                    className="px-3 py-2 hover:bg-gray-50 cursor-pointer"
                    disabled={!product.inStock}
                  >
                    <i className="ri-subtract-line"></i>
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 min-w-[3rem] text-center">
                    {getQuantity(product.id)}
                  </span>
                  <button 
                    onClick={() => updateQuantity(product.id, getQuantity(product.id) + 1)}
                    className="px-3 py-2 hover:bg-gray-50 cursor-pointer"
                    disabled={!product.inStock}
                  >
                    <i className="ri-add-line"></i>
                  </button>
                </div>

                <button 
                  onClick={() => handleAddToCart(product)}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    product.inStock 
                      ? 'bg-pink-600 text-white hover:bg-pink-700' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!product.inStock}
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
