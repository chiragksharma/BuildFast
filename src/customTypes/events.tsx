export interface FeatureDetails {
    title: string;
    items: string[];
    links: { href: string; text: string }[];
}

export interface Feature {
    title: string;
    details: FeatureDetails;
}

export interface FeaturesProps {
    features: Feature[];
    activeIndex: number | null;
    toggleAccordion: (index: number) => void;
}

export interface Link {
    text: string;
    url: string;
  }
  
export interface PricingFeature {
    text: string;
    disabled: boolean;
    highlighted_text: string;
    overall_highlighted: boolean;
    links: Link[];
    tags: string[];
    hover_text: string;
  }

  export interface Badge {
    text: string;
    badgeClass: string;
  }

  export interface Plan {
    name: string;
    originalPrice: string;
    discountedPrice: string;
    currency: string;
    popular: boolean;
    features: {
      [key: string]: PricingFeature;
    };
    buttonText: string;
    buttonClass: string;
    note: string;
    noteClass: string;
    badge?: Badge;
  }

export interface PricingProps {
    plan: Plan[];
  }
