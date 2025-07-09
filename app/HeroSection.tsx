'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://readdy.ai/api/search-image?query=Luxurious%20natural%20skincare%20spa%20setting%20with%20soft%20pink%20and%20cream%20tones%2C%20elegant%20glass%20jars%20filled%20with%20creamy%20body%20butter%2C%20surrounded%20by%20fresh%20flowers%20like%20roses%20and%20peonies%2C%20soft%20natural%20lighting%2C%20minimalist%20clean%20background%2C%20high-end%20beauty%20product%20photography%20style%2C%20serene%20and%20calming%20atmosphere%20with%20subtle%20botanical%20elements&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Nourish Your Skin
            <span className="block text-pink-300">Naturally</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Discover our premium collection of handcrafted body butters made with the finest natural ingredients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products"
              className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Shop Now
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}