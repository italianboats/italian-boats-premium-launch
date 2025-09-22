import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import ResponsiveHamburgerMenu from './ui/responsive-hamburger-menu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      id: 'home',
      label: 'Início',
      href: '#home',
      icon: <MapPin className="w-5 h-5" />
    },
    {
      id: 'services',
      label: 'Serviços',
      href: '#services',
      icon: <Phone className="w-5 h-5" />
    },
    {
      id: 'gallery',
      label: 'Galeria',
      href: '#gallery',
      icon: <MessageCircle className="w-5 h-5" />
    },
    {
      id: 'contact',
      label: 'Contato',
      href: '#contact',
      icon: <Mail className="w-5 h-5" />
    }
  ];

  const logo = (
    <div className="flex items-center space-x-3">
      <img
        src="https://growmoneydigital.com.br/italianboats/logo.png"
        alt="Italian Boats"
        className="h-12 w-auto object-contain"
        loading="eager"
      />
      <div className="hidden sm:block">
        <h1 className="text-xl font-bold text-italian-navy">Italian Boats</h1>
        <p className="text-sm text-charcoal/70">Tradição Italiana</p>
      </div>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-br from-italian-navy/95 via-italian-navy/90 to-italian-navy/95 backdrop-blur-md shadow-elegant border-b-2 border-luxury-gold/30'
          : 'bg-transparent border-b border-luxury-gold/20'
      }`}
    >
      <div className="container mx-auto px-6 pb-6">
        <div className="flex items-center justify-between h-28 py-4">
          {/* Logo - Centralizada */}
          <div className="flex-1 flex justify-center">
            <a
              href="#home"
              className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img
                src="https://growmoneydigital.com.br/italianboats/logo.png"
                alt="Italian Boats"
                className="h-24 w-auto object-contain"
                loading="eager"
              />
            </a>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-6 px-4">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`font-medium transition-colors duration-300 hover:text-luxury-gold ${
                  isScrolled ? 'text-italian-navy' : 'text-white'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Info - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-4 px-4">
            <a
              href="tel:+5562993639673"
              className={`flex items-center space-x-2 font-medium transition-colors duration-300 hover:text-luxury-gold ${
                isScrolled ? 'text-italian-navy' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">(62) 9 9363-9673</span>
            </a>
            <a
              href="https://wa.me/5562993639673"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury text-sm px-4 py-2"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <ResponsiveHamburgerMenu
              items={menuItems}
              logo={logo}
              className="relative"
            />
          </div>
        </div>
      </div>

      {/* Mobile Contact Bar */}
      <div className="lg:hidden bg-luxury-gold/10 backdrop-blur-sm border-t border-luxury-gold/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between text-sm space-x-4">
            <a
              href="tel:+5562993639673"
              className="flex items-center space-x-2 text-italian-navy hover:text-luxury-gold transition-colors px-3 py-2 rounded-lg hover:bg-luxury-gold/10"
            >
              <Phone className="w-4 h-4" />
              <span>(62) 9 9363-9673</span>
            </a>
            <a
              href="https://wa.me/5562993639673"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-luxury-gold hover:text-italian-navy transition-colors px-3 py-2 rounded-lg hover:bg-luxury-gold/10"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent"></div>
    </header>
  );
};

export default Header;
