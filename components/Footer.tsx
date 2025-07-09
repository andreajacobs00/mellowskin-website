'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-pacifico text-pink-600 mb-4">Mellow Skin</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Premium natural body butters crafted with love and the finest ingredients to nourish your skin.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-pink-600 cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-pink-600 cursor-pointer">
                <i className="ri-instagram-fill"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-pink-600 cursor-pointer">
                <i className="ri-twitter-fill"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-600 hover:text-pink-600 cursor-pointer">Home</Link></li>
              <li><Link href="/products" className="text-gray-600 hover:text-pink-600 cursor-pointer">Products</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-pink-600 cursor-pointer">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-pink-600 cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Customer Care</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-pink-600 cursor-pointer">Shipping Info</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 cursor-pointer">Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 cursor-pointer">Size Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 cursor-pointer">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Newsletter</h4>
            <p className="text-gray-600 text-sm mb-4">Subscribe for updates and special offers</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="bg-pink-600 text-white px-4 py-2 rounded-r-lg hover:bg-pink-700 transition-colors cursor-pointer whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2024 Mellow Skin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}