
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from './CartContext';
import CartSidebar from './CartSidebar';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-pink-600" style={{fontFamily: 'Pacifico, serif'}}>
              Mellow Skin
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">Home</Link>
              <Link href="/products" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">Products</Link>
              <Link href="/about" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">Contact</Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-shopping-cart-line text-xl"></i>
                </div>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
