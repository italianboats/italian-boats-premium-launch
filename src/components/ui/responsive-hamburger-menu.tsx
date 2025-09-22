import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
  isExternal?: boolean;
}

interface ResponsiveHamburgerMenuProps {
  items: MenuItem[];
  logo?: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  menuClassName?: string;
  itemClassName?: string;
  animationDuration?: number;
}

const ResponsiveHamburgerMenu: React.FC<ResponsiveHamburgerMenuProps> = ({
  items,
  logo,
  className = '',
  overlayClassName = '',
  menuClassName = '',
  itemClassName = '',
  animationDuration = 300
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const openMenu = () => {
    setIsAnimating(true);
    setIsOpen(true);
    setTimeout(() => setIsAnimating(false), animationDuration);
  };

  const closeMenu = () => {
    setIsAnimating(true);
    setIsOpen(false);
    setTimeout(() => setIsAnimating(false), animationDuration);
  };

  const handleItemClick = (item: MenuItem) => {
    if (!item.isExternal) {
      closeMenu();
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Hamburger Button */}
      <button
        onClick={isOpen ? closeMenu : openMenu}
        className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-luxury-gold/20 transition-all duration-300 hover:scale-105"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
      >
        <div className="relative w-6 h-6">
          <span
            className={`absolute top-1 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
            }`}
          />
          <span
            className={`absolute top-3 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute top-5 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0'
            }`}
          />
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          ref={overlayRef}
          className={`fixed inset-0 bg-italian-navy/90 backdrop-blur-md z-40 transition-opacity duration-${animationDuration} ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          } ${overlayClassName}`}
          onClick={closeMenu}
        />
      )}

      {/* Menu Panel */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl shadow-luxury z-50 transform transition-transform duration-${animationDuration} ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ${menuClassName}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-silver-mist/20">
            {logo && <div className="flex-shrink-0">{logo}</div>}
            <button
              onClick={closeMenu}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-silver-mist/10 hover:bg-silver-mist/20 transition-colors duration-200"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5 text-italian-navy" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-6 py-8 space-y-2">
            {items.map((item, index) => (
              <a
                key={item.id}
                href={item.href}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                onClick={() => handleItemClick(item)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-italian-navy hover:bg-luxury-gold/10 hover:text-luxury-gold transition-all duration-300 hover:scale-105 ${
                  itemClassName
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                }}
              >
                {item.icon && (
                  <div className="flex-shrink-0 w-5 h-5">
                    {item.icon}
                  </div>
                )}
                <span className="font-medium text-base">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="p-6 border-t border-silver-mist/20 bg-silver-mist/5">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-charcoal/80">
                <Phone className="w-4 h-4 text-luxury-gold" />
                <span>(62) 9 9363-9673</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-charcoal/80">
                <Mail className="w-4 h-4 text-luxury-gold" />
                <span>grklima@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-charcoal/80">
                <MapPin className="w-4 h-4 text-luxury-gold" />
                <span>Goiânia - GO</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ResponsiveHamburgerMenu;
