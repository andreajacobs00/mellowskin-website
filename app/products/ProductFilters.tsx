'use client';

import { useState } from 'react';

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([20, 35]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const categories = [
    'Moisturizing',
    'Anti-aging',
    'Sensitive Skin',
    'Aromatherapy',
    'Limited Edition'
  ];

  const ingredients = [
    'Shea Butter',
    'Coconut Oil',
    'Essential Oils',
    'Natural Extracts',
    'Vitamin E',
    'Aloe Vera'
  ];

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleIngredient = (ingredient: string) => {
    setSelectedIngredients(prev => 
      prev.includes(ingredient) 
        ? prev.filter(i => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Filters</h3>
      
      <div className="mb-8">
        <h4 className="font-medium text-gray-900 mb-4">Price Range</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-4">
            <input 
              type="range" 
              min="15" 
              max="40" 
              value={priceRange[0]}
              onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
              className="flex-1"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="font-medium text-gray-900 mb-4">Categories</h4>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category} className="flex items-center cursor-pointer">
              <input 
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
                className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
              />
              <span className="ml-3 text-sm text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h4 className="font-medium text-gray-900 mb-4">Key Ingredients</h4>
        <div className="space-y-3">
          {ingredients.map((ingredient) => (
            <label key={ingredient} className="flex items-center cursor-pointer">
              <input 
                type="checkbox"
                checked={selectedIngredients.includes(ingredient)}
                onChange={() => toggleIngredient(ingredient)}
                className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
              />
              <span className="ml-3 text-sm text-gray-700">{ingredient}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h4 className="font-medium text-gray-900 mb-4">Customer Rating</h4>
        <div className="space-y-2">
          {[5, 4, 3].map((rating) => (
            <label key={rating} className="flex items-center cursor-pointer">
              <input type="radio" name="rating" className="w-4 h-4 text-pink-600" />
              <div className="ml-3 flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`ri-star-${i < rating ? 'fill' : 'line'} text-sm`}></i>
                  ))}
                </div>
                <span className="text-sm text-gray-700">& Up</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap">
        Clear All Filters
      </button>
    </div>
  );
}