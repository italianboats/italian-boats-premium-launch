import React from 'react';
import HeroSlider from '@/components/HeroSlider';
import ComparisonSection from '@/components/ComparisonSection';
import TraditionSection from '@/components/TraditionSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSlider />
      <ComparisonSection />
      <TraditionSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      
      {/* Scroll to Top Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-luxury-gold hover:bg-golden-sunset text-italian-navy rounded-full flex items-center justify-center shadow-luxury hover:shadow-gold transition-all duration-300 hover:scale-110 animate-bounce"
        >
          ↑
        </button>
      </div>
    </main>
  );
};

export default Index;