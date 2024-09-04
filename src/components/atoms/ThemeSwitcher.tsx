import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    console.log('Current theme:', theme);
  }, [theme]);

  
  const themeMapping: Record<string, string> = {
    ruby: 'Ruby',
    sapphire: 'Sapphire',
    emerald: 'Emerald',
    daylight: 'Daylight'
  }


//   if (!mounted) return null;

  return (
    <div className='flex flex-col gap-3'>
     {Object.entries(themeMapping).map(([key, value]) => (
          <button
            key={key}
            className={`p-1 border rounded-md transition-colors duration-200 ${
              // The theme is only available after the component is mounted.
              mounted && theme === key
                ? 'border-primary bg-primary-foreground text-primary'
                : 'bg-primary text-primary-foreground'
            }`}
            onClick={() => {
              setTheme(key)
            }}
          >
            {value}
          </button>
        ))}
    </div>
  );
};

export default ThemeSwitcher;