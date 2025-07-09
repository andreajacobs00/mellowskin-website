'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from './AboutHero';
import StorySection from './StorySection';
import ValuesSection from './ValuesSection';
import TeamSection from './TeamSection';
import CertificationsSection from './CertificationsSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <CertificationsSection />
      <Footer />
    </div>
  );
}