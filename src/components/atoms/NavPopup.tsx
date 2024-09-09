// src/components/atoms/NavPopup.tsx
import React, { useEffect,useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface NavPopupProps {
  isOpen: boolean;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLAnchorElement>;
}

const NavPopup: React.FC<NavPopupProps> = ({ isOpen, onClose, anchorRef }) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

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

  const themes = ['FunBlue', 'Black', 'White'];

  return (
    <motion.div
      ref={popupRef}
      className="absolute w-72 mt-2 bg-background-secondary border border-elements-secondary shadow-lg rounded-lg p-4 z-50"
      style={popupStyle}
    >
      <div className="text-lg font-semibold mb-2">Themes</div>
      <hr className="border-gray-300 mb-4" />
      <div className="grid grid-cols-1 gap-4">
        {themes.map((theme) => (
          <motion.div
            key={theme}
            className={`cursor-pointer p-4 border rounded-lg shadow-sm ${selectedTheme === theme ? 'border-primary-color/80 bg-primary-color/10' : 'border-elementary-secondary'}`}
            onClick={() => setSelectedTheme(theme)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex flex-row justify-between items-center">
              <div className="font-medium">{theme}</div>
              <div className="relative flex items-center justify-center">
                <div className="rounded-full border border-elements-secondary p-1 flex items-center justify-center pointer-events-none">
                  <input
                    type="radio"
                    checked={selectedTheme === theme}
                    onChange={() => setSelectedTheme(theme)}
                    className="custom-radio"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NavPopup;