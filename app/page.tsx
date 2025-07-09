'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ProductsPreview from './ProductsPreview';
import TestimonialsSection from './TestimonialsSection';
import CallToActionSection from './CallToActionSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductsPreview />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}