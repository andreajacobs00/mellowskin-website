'use client';

import Link from 'next/link';

export default function CallToActionSection() {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Serene%20spa-like%20setting%20with%20natural%20skincare%20products%2C%20soft%20cream%20and%20pink%20color%20palette%2C%20elegant%20glass%20containers%20with%20body%20butters%2C%20surrounded%20by%20fresh%20flowers%20and%20natural%20elements%2C%20warm%20soft%20lighting%2C%20luxurious%20and%20calming%20atmosphere%2C%20high-end%20beauty%20product%20styling&width=1920&height=600&seq=cta-bg&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join thousands of happy customers who have discovered the secret to naturally beautiful, nourished skin with Mellow Skin body butters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/products"
              className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Shop Collection
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap"
            >
              Get in Touch
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-gray-300">Natural Ingredients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5 Star</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}