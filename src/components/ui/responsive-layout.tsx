import React from 'react';

interface ResponsiveLayoutProps {
  children: React.ReactNode;
  type?: 'flex' | 'grid' | 'stack';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: boolean;
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  gap?: string;
  columns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({
  children,
  type = 'flex',
  direction = 'row',
  wrap = false,
  justify = 'start',
  align = 'start',
  gap = '1rem',
  columns,
  className = '',
  as: Component = 'div'
}) => {
  const getFlexClasses = () => {
    const classes = ['flex'];
    
    // Direction
    if (direction === 'column') classes.push('flex-col');
    if (direction === 'row-reverse') classes.push('flex-row-reverse');
    if (direction === 'column-reverse') classes.push('flex-col-reverse');
    
    // Wrap
    if (wrap) classes.push('flex-wrap');
    
    // Justify
    const justifyMap = {
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly'
    };
    classes.push(justifyMap[justify]);
    
    // Align
    const alignMap = {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      stretch: 'items-stretch',
      baseline: 'items-baseline'
    };
    classes.push(alignMap[align]);
    
    return classes.join(' ');
  };

  const getGridClasses = () => {
    const classes = ['grid'];
    
    // Columns
    if (columns?.xs) classes.push(`grid-cols-${columns.xs}`);
    if (columns?.sm) classes.push(`sm:grid-cols-${columns.sm}`);
    if (columns?.md) classes.push(`md:grid-cols-${columns.md}`);
    if (columns?.lg) classes.push(`lg:grid-cols-${columns.lg}`);
    if (columns?.xl) classes.push(`xl:grid-cols-${columns.xl}`);
    
    // Justify
    const justifyMap = {
      start: 'justify-items-start',
      end: 'justify-items-end',
      center: 'justify-items-center',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly'
    };
    classes.push(justifyMap[justify]);
    
    // Align
    const alignMap = {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      stretch: 'items-stretch',
      baseline: 'items-baseline'
    };
    classes.push(alignMap[align]);
    
    return classes.join(' ');
  };

  const getStackClasses = () => {
    return 'flex flex-col space-y-4';
  };

  const getLayoutClasses = () => {
    switch (type) {
      case 'flex':
        return getFlexClasses();
      case 'grid':
        return getGridClasses();
      case 'stack':
        return getStackClasses();
      default:
        return getFlexClasses();
    }
  };

  const getGapStyle = () => {
    if (type === 'grid') {
      return { gap };
    }
    return {};
  };

  return (
    <Component
      className={`${getLayoutClasses()} ${className}`}
      style={getGapStyle()}
    >
      {children}
    </Component>
  );
};

export default ResponsiveLayout;
