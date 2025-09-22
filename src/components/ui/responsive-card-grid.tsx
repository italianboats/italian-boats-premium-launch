import React, { useState, useEffect } from 'react';
import LazyImage from './lazy-image';

interface CardItem {
  id: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  icon?: React.ReactNode;
  tags?: string[];
  href?: string;
  onClick?: () => void;
  className?: string;
}

interface ResponsiveCardGridProps {
  items: CardItem[];
  columns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: string;
  className?: string;
  cardClassName?: string;
  imageClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  tagClassName?: string;
  animationDelay?: number;
  staggerAnimation?: boolean;
}

const ResponsiveCardGrid: React.FC<ResponsiveCardGridProps> = ({
  items,
  columns = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 4
  },
  gap = '1.5rem',
  className = '',
  cardClassName = '',
  imageClassName = '',
  contentClassName = '',
  titleClassName = '',
  descriptionClassName = '',
  tagClassName = '',
  animationDelay = 100,
  staggerAnimation = true
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('card-grid');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const getGridClasses = () => {
    const classes = ['grid'];
    
    // Add responsive column classes
    if (columns.xs) classes.push(`grid-cols-${columns.xs}`);
    if (columns.sm) classes.push(`sm:grid-cols-${columns.sm}`);
    if (columns.md) classes.push(`md:grid-cols-${columns.md}`);
    if (columns.lg) classes.push(`lg:grid-cols-${columns.lg}`);
    if (columns.xl) classes.push(`xl:grid-cols-${columns.xl}`);
    
    return classes.join(' ');
  };

  const CardComponent: React.FC<{ item: CardItem; index: number }> = ({ item, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    const cardContent = (
      <div
        className={`group relative bg-white rounded-xl shadow-elegant hover:shadow-luxury transition-all duration-500 overflow-hidden hover:scale-105 hover:-translate-y-2 ${
          staggerAnimation && isVisible
            ? 'animate-fade-in-up'
            : ''
        } ${cardClassName}`}
        style={{
          animationDelay: staggerAnimation ? `${index * animationDelay}ms` : '0ms'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        {item.image && (
          <div className="relative h-48 overflow-hidden">
            <LazyImage
              src={item.image}
              alt={item.imageAlt || item.title}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                isHovered ? 'scale-110' : 'scale-100'
              } ${imageClassName}`}
              fadeIn
              blur
            />
            <div className="absolute inset-0 bg-gradient-to-t from-italian-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        {/* Icon */}
        {item.icon && !item.image && (
          <div className="flex items-center justify-center h-48 bg-gradient-luxury/10">
            <div className="w-16 h-16 text-luxury-gold">
              {item.icon}
            </div>
          </div>
        )}

        {/* Content */}
        <div className={`p-6 ${contentClassName}`}>
          {/* Title */}
          <h3 className={`font-bold text-italian-navy mb-3 group-hover:text-luxury-gold transition-colors duration-300 ${titleClassName}`}>
            {item.title}
          </h3>

          {/* Description */}
          {item.description && (
            <p className={`text-charcoal/80 text-sm leading-relaxed mb-4 ${descriptionClassName}`}>
              {item.description}
            </p>
          )}

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className={`px-3 py-1 bg-luxury-gold/10 text-luxury-gold text-xs font-semibold rounded-full ${tagClassName}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Hover Effect */}
          <div className="absolute inset-0 bg-gradient-luxury opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
        </div>
      </div>
    );

    if (item.href) {
      return (
        <a
          href={item.href}
          className="block"
          onClick={item.onClick}
        >
          {cardContent}
        </a>
      );
    }

    return (
      <div
        className="block cursor-pointer"
        onClick={item.onClick}
      >
        {cardContent}
      </div>
    );
  };

  return (
    <div
      id="card-grid"
      className={`${getGridClasses()} ${className}`}
      style={{ gap }}
    >
      {items.map((item, index) => (
        <CardComponent
          key={item.id}
          item={item}
          index={index}
        />
      ))}
    </div>
  );
};

export default ResponsiveCardGrid;
