import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  isOpen?: boolean;
}

interface ResponsiveAccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
  itemClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
}

const ResponsiveAccordion: React.FC<ResponsiveAccordionProps> = ({
  items,
  allowMultiple = false,
  className = '',
  itemClassName = '',
  titleClassName = '',
  contentClassName = ''
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set(items.filter(item => item.isOpen).map(item => item.id))
  );
  const [heights, setHeights] = useState<Record<string, number>>({});
  const contentRefs = useRef<Record<string, HTMLDivElement>>({});

  useEffect(() => {
    // Calculate heights for smooth animations
    const newHeights: Record<string, number> = {};
    items.forEach(item => {
      const element = contentRefs.current[item.id];
      if (element) {
        newHeights[item.id] = element.scrollHeight;
      }
    });
    setHeights(newHeights);
  }, [items]);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => {
      const newOpenItems = new Set(prev);
      
      if (newOpenItems.has(itemId)) {
        newOpenItems.delete(itemId);
      } else {
        if (!allowMultiple) {
          newOpenItems.clear();
        }
        newOpenItems.add(itemId);
      }
      
      return newOpenItems;
    });
  };

  return (
    <div className={`w-full space-y-2 ${className}`}>
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        const height = heights[item.id] || 0;
        
        return (
          <div
            key={item.id}
            className={`border border-silver-mist/20 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-elegant ${itemClassName}`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className={`w-full px-6 py-4 text-left flex items-center justify-between transition-all duration-300 hover:bg-silver-mist/5 ${
                isOpen ? 'bg-luxury-gold/5 border-luxury-gold/20' : 'bg-white/50'
              } ${titleClassName}`}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <span className="font-semibold text-italian-navy text-base sm:text-lg">
                {item.title}
              </span>
              <div className="flex-shrink-0 ml-4">
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-luxury-gold transition-transform duration-300" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-charcoal/60 transition-transform duration-300" />
                )}
              </div>
            </button>
            
            <div
              id={`accordion-content-${item.id}`}
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                height: isOpen ? `${height}px` : '0px',
                opacity: isOpen ? 1 : 0
              }}
            >
              <div
                ref={(el) => {
                  if (el) contentRefs.current[item.id] = el;
                }}
                className={`px-6 py-4 text-charcoal/80 leading-relaxed ${contentClassName}`}
              >
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResponsiveAccordion;
