// src/components/atoms/NavPopup.tsx
import React, { useEffect,useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

interface NavPopupProps {
  isOpen: boolean;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLAnchorElement>;
}

const NavPopup: React.FC<NavPopupProps> = ({ isOpen, onClose, anchorRef }) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node) && !anchorRef.current?.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, anchorRef]);

  if (!isOpen) return null;

  const anchorRect = anchorRef.current?.getBoundingClientRect();
  const popupStyle = anchorRect
    ? {
        top: anchorRect.bottom + window.scrollY,
        left: anchorRect.left + window.scrollX - 170, // Adjust the value to move the popup towards the left
      }
    : {};

    const themes = ['funblue', 'ruby', 'sapphire', 'daylight', 'emerald'];
    
    const themeColors = [
      'bg-primary-color',
      'bg-background-primary',
      'bg-foreground-hsl',
      'bg-background-secondary',
      'bg-cards-bg',
      'bg-hero-headline-text-color',
      'bg-foreground-opposite',
    ];

  return (
    <motion.div
      ref={popupRef}
      className="absolute w-72 mt-2 bg-background-secondary border border-elements-secondary shadow-lg rounded-lg p-4 z-50"
      style={popupStyle}
    >
      <div className="text-lg font-semibold mb-2">Themes</div>
      <hr className="border-gray-300 mb-4" />
      <div className="grid grid-cols-1 gap-4">
        {themes.map((themeKey) => (
          <motion.div
            key={themeKey}
            className={`cursor-pointer p-4 border rounded-lg shadow-sm ${mounted && theme === themeKey ? 'border-primary-color/80 bg-primary-color/10' : 'border-elementary-secondary'}`}
            onClick={() => setTheme(themeKey)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex flex-row justify-between items-center">
              <div className="font-medium">{themeKey}</div>
              <div className="relative flex items-center justify-center">
                <div className="rounded-full border border-elements-secondary p-1 flex items-center justify-center pointer-events-none">
                  <input
                    type="radio"
                    checked={mounted && theme === themeKey}
                    onChange={() => setTheme(themeKey)}
                    className="custom-radio"
                  />
                </div>
              </div>
            </div>
            {mounted && theme === themeKey ? 
            <div className='flex w-full mt-2'>
              <div className='flex w-full h-2'>
                {themeColors.map((colorClass, index) => (
                  <div key={index} className={`flex-1 ${colorClass}`}></div>
                ))}
               </div>
            </div>
            :
            null}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NavPopup;