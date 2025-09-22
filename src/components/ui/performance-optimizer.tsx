import React, { Suspense, lazy, ComponentType, ReactNode } from 'react';
import { useScript } from '../../hooks/use-script';
import { useLazyLoad } from '../../hooks/use-lazy-load';

interface PerformanceOptimizerProps {
  children: ReactNode;
  fallback?: ReactNode;
  scripts?: Array<{
    src: string;
    condition?: boolean;
    onLoad?: () => void;
  }>;
  lazyComponents?: Array<{
    name: string;
    import: () => Promise<{ default: ComponentType<any> }>;
    condition?: boolean;
  }>;
  preloadImages?: string[];
  criticalCSS?: string;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  fallback = (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-8 h-8 border-2 border-luxury-gold/30 border-t-luxury-gold rounded-full animate-spin"></div>
    </div>
  ),
  scripts = [],
  lazyComponents = [],
  preloadImages = [],
  criticalCSS
}) => {
  // Load scripts conditionally
  scripts.forEach(({ src, condition = true, onLoad }) => {
    useScript({
      src,
      condition,
      onLoad,
      async: true
    });
  });

  // Preload critical images
  React.useEffect(() => {
    preloadImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, [preloadImages]);

  // Inject critical CSS
  React.useEffect(() => {
    if (criticalCSS) {
      const style = document.createElement('style');
      style.textContent = criticalCSS;
      document.head.appendChild(style);
    }
  }, [criticalCSS]);

  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

// Lazy component wrapper
export const createLazyComponent = (
  importFn: () => Promise<{ default: ComponentType<any> }>,
  fallback?: ReactNode
) => {
  const LazyComponent = lazy(importFn);
  
  return (props: any) => (
    <Suspense fallback={fallback || <div>Carregando...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const [hasIntersected, setHasIntersected] = React.useState(false);
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options, hasIntersected]);

  return { ref, isIntersecting, hasIntersected };
};

// Debounced hook for performance
export const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Throttled hook for performance
export const useThrottle = <T,>(value: T, limit: number): T => {
  const [throttledValue, setThrottledValue] = React.useState<T>(value);
  const lastRan = React.useRef<number>(Date.now());

  React.useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);

  return throttledValue;
};

export default PerformanceOptimizer;
