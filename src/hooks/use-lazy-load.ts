import { useEffect, useState, useRef } from 'react';

interface UseLazyLoadOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface UseLazyLoadReturn {
  isVisible: boolean;
  ref: React.RefObject<HTMLElement>;
}

export const useLazyLoad = ({
  threshold = 0.1,
  rootMargin = '50px',
  triggerOnce = true
}: UseLazyLoadOptions = {}): UseLazyLoadReturn => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { isVisible, ref };
};

export default useLazyLoad;
