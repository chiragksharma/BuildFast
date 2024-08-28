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
