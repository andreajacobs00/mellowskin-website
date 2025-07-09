'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import LocationMap from './LocationMap';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ContactHero />
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <LocationMap />
      <Footer />
    </div>
  );
}