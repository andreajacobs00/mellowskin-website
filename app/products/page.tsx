'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from './ProductGrid';
import ProductFilters from './ProductFilters';

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Product Collection
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our full range of premium natural body butters, each crafted with unique ingredients to nourish and pamper your skin
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <ProductFilters />
            </div>
            <div className="lg:w-3/4">
              <ProductGrid />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}