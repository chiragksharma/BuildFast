import * as PhosphorIcons from 'phosphor-react';

type IconComponent = React.ComponentType<any>;

export function getIconByName(logo: string): string | IconComponent {
  if (logo.includes('/')) {
    return logo; // It's a path
  } else {
    return PhosphorIcons[logo as keyof typeof PhosphorIcons] as IconComponent; // It's an icon name
  }
}