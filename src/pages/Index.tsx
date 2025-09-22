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
      
      {/* Enhanced Scroll to Top Button */}
      <div className="fixed bottom-8 right-8 z-50 group">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="relative w-14 h-14 bg-gradient-luxury hover:bg-gradient-sunset text-italian-navy rounded-2xl flex items-center justify-center shadow-luxury hover:shadow-gold transition-all duration-500 hover:scale-110 hover:-translate-y-1 animate-float backdrop-blur-sm border border-luxury-gold/20 overflow-hidden"
        >
          <span className="text-xl font-bold relative z-10">↑</span>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          
          {/* Glow ring */}
          <div className="absolute -inset-1 bg-gradient-luxury rounded-2xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500"></div>
        </button>
      </div>
    </main>
  );
};

export default Index;