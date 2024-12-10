// config/configTypes.ts

export interface Feature {
  text: string;
  disabled: boolean;
  highlighted_text: string;
  overall_highlighted: boolean;
  links: { text: string; url: string }[];
  tags: string[];
  hover_text: string;
}

export interface ButtonConfig {
  buttonText: string;
  btnLink: string;
  buttonClass: string;
}

export interface NoteConfig {
  note: string;
  noteClass: string;
}

export interface HeaderConfig {
  title: string;
  subtitle: string;
}

export interface NavbarConfig {
  links: { text: string; href: string }[];
  cta: { text: string; href: string };
  mobileMenu: { text: string; href: string }[];
}

export interface HeroConfig {
  heading: string;
  highlightedText: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  highlightedSmallText: string;
  smallText: string;
  highlightTagColor: string;
  highlightTextColor: string;
  images: {
    heroImage: string;
    avatars: string[];
  };
  bold_avatar_text: string;
  avatar_text: string;
}

export interface FeaturedConfig {
  title: string;
  logos: { src: string; alt: string; title: string; link: string }[];
}

export interface ProblemsConfig {
  heading: string;
  label: string;
  problemsList: { title?: string, description: string; icon: string }[];
}

export interface FeaturesListicleConfig {
  heading: string;
  description: string;
  automatic_timer: boolean;
  features: {
    title: string;
    icon: string;
    details: {
      title: string;
      items: string[];
      links: { text: string; href: string }[];
    };
  }[];
}

export interface AboutConfig {
  profilePhoto: string;
  tagline: string;
  description: string;
  pointers: { text: string; highlight: string[] }[];
  videoUrl: string;
  shortText: string;
}

export interface PricingConfig {
  sectionId: string;
  backgroundColor: string;
  header: {
    title: string;
    titleClass: string;
    heading: string;
    headingClass: string;
    offer: {
      text: string;
      textClass: string;
      highlighted_text: string;
    };
  };
  plans: {
    name: string;
    originalPrice: string;
    discountedPrice: string;
    currency: string;
    popular: boolean;
    features: { [key: string]: Feature };
    buttonText: string;
    btnLink: string;
    buttonClass: string;
    note: string;
    noteClass: string;
    badge?: {
      text: string;
      badgeClass: string;
    };
  }[];
  testimonial: {
    text: string;
    author: string;
    badge: string;
    badgeClass: string;
    containerClass: string;
  };
}

export interface TestimonialsGridConfig {
  tweetLink: string | null;
  profileName: string;
  profileDesc:string;
  description: string;
  image: string;
  feedback: string;
  link: string;
  platform: string;
  showStars?: boolean;
  starCount?: number
}

export interface FAQConfig {
  heading: string;
  questions: { question: string; answer: string }[];
}

export interface CTAConfig {
  heading: string;
  description: string;
  buttonText: string;
  buttonToolTip: string;
}

export interface FooterConfig {
  description: string;
  sections: {
    title: string;
    links: { text: string; href: string }[];
  }[];
}

export interface StripeConfig {
  prices: {
    basic: string;
    premium: string;
  };
  type: string;
}

export interface RazorpayConfig {
  keyId: string;
  keySecret: string;
}

export interface ResendConfig {
  from: string;
  subject: string;
  text: string;
}

export interface SiteConfig {
  theme: {
    colors: {
      primary: string;
      secondary: string;
      background: string;
    };
    text: {
      primary: string;
      secondary: string;
      highlight: string;
    };
    font: string;
  };
  logo: string;
  brand: string;
  content: {
    navbar: NavbarConfig;
    hero: HeroConfig;
    featured: FeaturedConfig;
    problems: ProblemsConfig;
    featuresListicle: FeaturesListicleConfig;
    about: AboutConfig;
    pricing: PricingConfig;
    testimonialsGrid: TestimonialsGridConfig[];
    FAQ: FAQConfig;
    cta: CTAConfig;
    footer: FooterConfig;
  };
  stripe: StripeConfig;
  razorpay: RazorpayConfig;
  resend: ResendConfig;
}