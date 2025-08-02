import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollAnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'slide-left' | 'slide-right' | 'scale' | 'bounce';
  delay?: number;
  className?: string;
}

const ScrollAnimatedSection: React.FC<ScrollAnimatedSectionProps> = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = ''
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0 transform';
    
    const baseClass = 'opacity-100 transform transition-all duration-1000 ease-out';
    
    switch (animation) {
      case 'fade-up':
        return `${baseClass} translate-y-0`;
      case 'fade-down':
        return `${baseClass} translate-y-0`;
      case 'slide-left':
        return `${baseClass} translate-x-0`;
      case 'slide-right':
        return `${baseClass} translate-x-0`;
      case 'scale':
        return `${baseClass} scale-100`;
      case 'bounce':
        return `${baseClass} translate-y-0`;
      default:
        return `${baseClass} translate-y-0`;
    }
  };

  const getInitialClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'translate-y-10';
      case 'fade-down':
        return '-translate-y-10';
      case 'slide-left':
        return 'translate-x-10';
      case 'slide-right':
        return '-translate-x-10';
      case 'scale':
        return 'scale-95';
      case 'bounce':
        return 'translate-y-10';
      default:
        return 'translate-y-10';
    }
  };

  return (
    <div
      ref={ref}
      className={`${isVisible ? getAnimationClass() : `opacity-0 transform ${getInitialClass()}`} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedSection;