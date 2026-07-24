export interface NavLink {
  label: string;
  href: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface TripCard {
  nights: string;
  country: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export interface PressQuote {
  quote: string;
}

export interface AwardCallout {
  text: string;
}

export interface WhyItem {
  icon: string;
  label: string;
}

export interface FooterColumn {
  title: string;
  links: string[];
}
