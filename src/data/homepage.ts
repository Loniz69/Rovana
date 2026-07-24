import type {
  AwardCallout,
  FooterColumn,
  NavLink,
  PressQuote,
  Testimonial,
  TripCard,
  WhyItem,
} from "@/types/content";

export const NAV_LINKS: NavLink[] = [
  { label: "Destinations", href: "#" },
  { label: "Experiences", href: "#" },
  { label: "About", href: "#" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Hands down it was the most amazing experience our family has ever done",
    author: "Brett",
    location: "Middle East",
  },
  {
    quote:
      "We have explored some incredible places and had unique adventures that could have only been made possible with Rovana's guidance",
    author: "Ike and Alexa",
    location: "Italy",
  },
  {
    quote: "Wonderful, wonderful, wonderful. Rovana is top notch – you will not be disappointed",
    author: "Wendy",
    location: "Morocco",
  },
  {
    quote: "Rovana delivered a once in a lifetime experience that my family and I will forever cherish",
    author: "Adrienne",
    location: "Italy",
  },
  {
    quote: "Rovana will change the way you travel",
    author: "Micah",
    location: "Egypt",
  },
  {
    quote: "Glamping, hiking, icebergs, gourmet food. Not sure how my trip could have been any better",
    author: "Jimmy",
    location: "Greenland",
  },
  {
    quote:
      "A dream come true – from small riads to a mountain fortress and a desert oasis. Rovana delivered",
    author: "Kim",
    location: "Morocco",
  },
  {
    quote: "Highly recommend Rovana's help in planning an adventurous family-friendly holiday",
    author: "Susan",
    location: "Sweden",
  },
];

export const TRIP_CARDS: TripCard[] = [
  {
    nights: "12 nights",
    country: "France",
    title: "The Lost Generation",
    description:
      "Published 100 years ago this year, Ernest Hemingway's The Sun Also Rises became the indisputable guidebook to the Lost...",
    price: "From £20,000 per person excl. flights",
    image: "/images/trips/lost-generation.jpg",
  },
  {
    nights: "8 nights",
    country: "Brazil",
    title: "The Rhythm of Water",
    description: "When you study a map of the Amazon, it looks like...",
    price: "From £12,800 per person excl. flights",
    image: "/images/trips/rhythm-of-water.jpg",
  },
  {
    nights: "9 nights",
    country: "Italy",
    title: "Highlights of Italy: A Luxury Holiday in Rome, Florence & Venice",
    description: "This nine-night holiday to Rome, Florence and Venice will see you...",
    price: "From £8,000 per person excl. flights",
    image: "/images/trips/highlights-of-italy.jpg",
  },
  {
    nights: "11 nights",
    country: "Greece",
    title: "Athens, Mykonos and Crete: A Luxury Family Discovery in Greece",
    description: "Ancient ruins are the backdrop to venturesome days and peaceful evenings...",
    price: "From £9,800 per person excl. flights",
    image: "/images/trips/greece-family.jpg",
  },
  {
    nights: "5 nights",
    country: "Iceland",
    title: "Iceland: A Luxury Trip Chasing the Northern Lights",
    description: "Our expert guides are some of Iceland's best Borealis hunters. Come winter,...",
    price: "From £8,400 per person excl. flights",
    image: "/images/trips/iceland.jpg",
  },
  {
    nights: "10 nights",
    country: "Japan",
    title: "Tokyo & Kyoto: A Japan Family Holiday",
    description: "The ultimate family tour of Japan. Konnichiwa. Here at Rovana our...",
    price: "From £13,750 per person excl. flights",
    image: "/images/trips/japan.jpg",
  },
  {
    nights: "13 nights",
    country: "Ecuador & the Galapagos",
    title: "Ecuador & Galápagos: A Journey Into Nature",
    description: "In 2008, Ecuador became the first country in the world to...",
    price: "From £14,850 per person excl. flights",
    image: "/images/trips/ecuador-galapagos.jpg",
  },
  {
    nights: "7 nights",
    country: "Morocco",
    title: "A Journey Into Morocco",
    description: "At the gateway to Africa, Morocco bears all the marks of...",
    price: "From £7,000 per person excl. flights",
    image: "/images/trips/morocco.jpg",
  },
  {
    nights: "8 nights",
    country: "Kenya",
    title: "Kenya: The Ultimate Family Safari",
    description: "The first safari is one of those long anticipated moments in...",
    price: "From £9,500 per person excl. flights",
    image: "/images/trips/kenya.jpg",
  },
];

export const PRESS_QUOTES: PressQuote[] = [
  { quote: "Bespoke luxury travel outfitter Rovana's new tool may reinvent how you book" },
  {
    quote:
      "Many travel companies brag about once-in-a-lifetime experiences but with Rovana, it's not hyperbole",
  },
  { quote: "Rovana have built something of a name for themselves as thought leaders in the travel business" },
  {
    quote:
      "Luxury travel company, Rovana, specialises in the trip you didn't even realize you had been dreaming of.",
  },
];

export const AWARD_CALLOUTS: AwardCallout[] = [
  { text: "One of our travel experts voted as a Robb Report Travel Master" },
  { text: "Travel + Leisure World's Most Influential Travel Specialists 2026" },
  { text: "Awarded Best Custom Luxury Vacations 2025 at the Best of Luxury Travel Awards 2025" },
];

export const WHY_ITEMS: WhyItem[] = [
  { icon: "/images/icons/award.svg", label: "Award-winning planners" },
  { icon: "/images/icons/quote.svg", label: "No-obligation quotes" },
  { icon: "/images/icons/map.svg", label: "No planning fees" },
  { icon: "/images/icons/support.svg", label: "24/7 on the ground support" },
  { icon: "/images/icons/guides.svg", label: "Expert private guides" },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Rovana",
    links: ["Speak To An Expert", "Media Enquiries", "Get In Touch", "Pursuit Of Feeling Podcast"],
  },
  {
    title: "Useful Information",
    links: [
      "About Us",
      "Booking Conditions",
      "Careers",
      "Frequently Asked Questions",
      "Online Enquiry",
      "Press Room",
      "Privacy Policy",
      "Regenerative Travel",
      "Sitemap",
      "Travel Insurance",
      "Safety Information",
    ],
  },
  {
    title: "Popular Destinations",
    links: ["Argentina", "Canada", "Chile", "Iceland", "Italy", "Japan", "Kenya", "Morocco", "Peru", "Thailand", "The USA"],
  },
  {
    title: "Who",
    links: ["Couples", "Family", "Group", "Honeymoons", "Solo"],
  },
  {
    title: "What",
    links: [
      "Pursuit Of Feeling",
      "Feelings Engine",
      "See You In The Moment",
      "Take Me On A Story",
      "James Bond",
      "Adventures",
      "Beach",
      "Blink",
      "Eclipse",
      "Field Trip",
      "Food",
      "Get Lost",
      "Safari",
      "Unusual",
    ],
  },
];
