
'use client';

import { useState } from 'react';
import { useCart } from './CartContext';
import { useAuth } from './AuthContext';
import SignInModal from './SignInModal';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const { isAuthenticated, signIn } = useAuth();
  const [showSignIn, setShowSignIn] = useState(false);

  if (!isOpen) return null;

  const handleCheckout = () => {
    if (!isAuthenticated) {
      setShowSignIn(true);
    } else {
      // Proceed to checkout
      console.log('Proceeding to checkout...');
    }
  };

  const handleSignIn = (email: string, password: string) => {
    signIn(email, password);
    setShowSignIn(false);
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>
      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <i className="ri-shopping-cart-line text-4xl text-gray-300 mb-4"></i>
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover object-top rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-pink-600 font-semibold">${item.price}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 cursor-pointer"
                      >
                        <i className="ri-subtract-line text-sm"></i>
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 cursor-pointer"
                      >
                        <i className="ri-add-line text-sm"></i>
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded cursor-pointer"
                  >
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold text-pink-600">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              {isAuthenticated ? 'Proceed to Checkout' : 'Sign In to Checkout'}
            </button>
          </div>
        )}
      </div>

      <SignInModal 
        isOpen={showSignIn}
        onClose={() => setShowSignIn(false)}
        onSignIn={handleSignIn}
      />
    </>
  );
}
