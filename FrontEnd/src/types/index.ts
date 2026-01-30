// Destination Types
export interface Highlight {
  title: string;
  text: string;
}

export interface Destination {
  id: string;
  title: string;
  imageSrc: string;
  description: string;
  fullDescription: string;
  highlights: Highlight[];
}

// Tour Types
export interface Tour {
  title: string;
  description: string;
  imageSrc: string;
}
