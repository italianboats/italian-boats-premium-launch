import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
  width?: number;
  height?: number;
  onLoad?: () => void;
  onError?: () => void;
  threshold?: number;
  rootMargin?: string;
  fadeIn?: boolean;
  blur?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8vPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5DYXJyZWdhbmRvLi4uPC90ZXh0Pjwvc3ZnPg==',
  className = '',
  width,
  height,
  onLoad,
  onError,
  threshold = 0.1,
  rootMargin = '50px',
  fadeIn = true,
  blur = true
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <div
          className={`absolute inset-0 bg-silver-mist/20 flex items-center justify-center transition-opacity duration-300 ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <img
            src={placeholder}
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: blur ? 'blur(5px)' : 'none' }}
          />
        </div>
      )}

      {/* Main Image */}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-all duration-500 ${
            fadeIn && isLoaded
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          loading="lazy"
        />
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-silver-mist/20 flex items-center justify-center">
          <div className="text-center text-charcoal/60">
            <div className="w-12 h-12 mx-auto mb-2 bg-silver-mist/50 rounded-full flex items-center justify-center">
              <span className="text-2xl">📷</span>
            </div>
            <p className="text-sm">Erro ao carregar imagem</p>
          </div>
        </div>
      )}

      {/* Loading Spinner */}
      {isInView && !isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-luxury-gold/30 border-t-luxury-gold rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
