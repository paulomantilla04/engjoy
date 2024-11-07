import React, { useMemo } from 'react';
import { BrainIcon } from './BrainIcon'

interface BackgroundWithIconsProps {
  children?: React.ReactNode;
  iconSize?: number;
  gap?: number;
  className?: string;
}

const BackgroundWithIcons = ({
  children,
  iconSize = 28,
  gap = 8,
  className = ''
}: BackgroundWithIconsProps) => {
  const createIconGrid = useMemo(() => {
    const icons = [];
    const iconsPerRow = Math.ceil(100 / ((iconSize + gap) / 16));
    const rows = Math.ceil(60 / ((iconSize + gap) / 16));

    for (let row = 0; row < rows; row++) {
      
      for (let col = 0; col < iconsPerRow; col++) {
        
        icons.push(
          <BrainIcon
            key={`${row}-${col}`}
            className="text-blue-600/30 transition-all duration-500 hover:text-primary/30 dark:hover:text-primary/30"
            style={{
              position: 'absolute',
              top: `${row * (iconSize + gap)}px`,
              left: `${col * (iconSize + gap)}px`,
              width: `${iconSize}px`,
              height: `${iconSize}px`,
            }}
          />
        );
      }
    }
    return icons;
  }, [iconSize, gap]);

  return (
    <div className={`relative w-full h-[600px] max-lg:h-[300px] overflow-hidden ${className} bg-black`}>
      <div className="absolute inset-0">
        {createIconGrid}
      </div>

      <div 
        className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black  to-transparent dark:from-transparent dark:via-background/50 dark:to-background" 
      />

      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default BackgroundWithIcons;