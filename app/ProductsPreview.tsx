'use client';

import Link from 'next/link';

export default function ProductsPreview() {
  const products = [
    {
      id: 1,
      name: 'Lavender Dreams',
      price: '$24.99',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20glass%20jar%20containing%20creamy%20lavender-colored%20body%20butter%2C%20surrounded%20by%20fresh%20lavender%20sprigs%20and%20purple%20flowers%2C%20soft%20natural%20lighting%2C%20clean%20white%20background%2C%20luxury%20skincare%20product%20photography%2C%20professional%20beauty%20shot%20with%20pastel%20purple%20and%20white%20color%20scheme&width=400&height=400&seq=product-1&orientation=squarish',
      description: 'Soothing lavender-infused body butter for relaxation'
    },
    {
      id: 2,
      name: 'Vanilla Bliss',
      price: '$26.99',
      image: 'https://readdy.ai/api/search-image?query=Premium%20glass%20jar%20with%20creamy%20vanilla-colored%20body%20butter%2C%20surrounded%20by%20vanilla%20beans%20and%20warm%20cream%20tones%2C%20soft%20natural%20lighting%2C%20clean%20white%20background%2C%20luxury%20skincare%20product%20photography%2C%20professional%20beauty%20shot%20with%20warm%20beige%20and%20cream%20color%20scheme&width=400&height=400&seq=product-2&orientation=squarish',
      description: 'Rich vanilla-scented body butter for deep moisturizing'
    },
    {
      id: 3,
      name: 'Citrus Burst',
      price: '$23.99',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20glass%20jar%20containing%20bright%20citrus-colored%20body%20butter%2C%20surrounded%20by%20fresh%20orange%20slices%20and%20lemon%20wedges%2C%20soft%20natural%20lighting%2C%20clean%20white%20background%2C%20luxury%20skincare%20product%20photography%2C%20professional%20beauty%20shot%20with%20vibrant%20orange%20and%20yellow%20color%20scheme&width=400&height=400&seq=product-3&orientation=squarish',
      description: 'Energizing citrus blend for morning skincare routine'
    },
    {
      id: 4,
      name: 'Rose Garden',
      price: '$28.99',
      image: 'https://readdy.ai/api/search-image?query=Luxurious%20glass%20jar%20with%20rose-tinted%20body%20butter%2C%20surrounded%20by%20fresh%20pink%20roses%20and%20rose%20petals%2C%20soft%20natural%20lighting%2C%20clean%20white%20background%2C%20luxury%20skincare%20product%20photography%2C%20professional%20beauty%20shot%20with%20romantic%20pink%20and%20white%20color%20scheme&width=400&height=400&seq=product-4&orientation=squarish',
      description: 'Romantic rose-infused body butter for ultimate luxury'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most loved body butters, each crafted with unique natural ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow group overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-pink-600">
                    {product.price}
                  </span>
                  <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors cursor-pointer whitespace-nowrap">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/products"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}