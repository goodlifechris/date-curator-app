export interface Experience {
  id: string;
  category: string;
  title: string;
  description: string;
  price: string;
  currency: string;
  badge?: string;
  bgGradient: string;
  emoji: string;
  categoryKey: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    category: "The Golden Hour Date",
    title: "Nairobi Skyline Affair ",
    description:
      "A romantic sunset setup with candles, flowers, and drinks.",
    price: "45,000",
    currency: "KSH",
    badge: "Signature",
    bgGradient: "linear-gradient(135deg, #1a0a00, #3d1f00)",
    emoji: "🌅",
    categoryKey: "Simple Romantic Experience",
  },
  {
    id: "2",
    category: "The Love Picnic",
    title: "Rift Valley Serenade",
    description:
      "A beautifully styled outdoor picnic with cozy seating and treats",
    price: "120,000",
    currency: "KSH",
    badge: "Popular",
    bgGradient: "linear-gradient(135deg, #000a1a, #001a3d)",
    emoji: "🚁",
    categoryKey: "Simple Romantic Experience",
  },
  {
    id: "3",
    category: "The Cozy Cinema Date",
    title: "Petals & Serenity",
    description:
      "A private outdoor movie night with blankets and snacks.",
       price: "38,000",
    currency: "KSH",
    badge: "New",
    bgGradient: "linear-gradient(135deg, #0d0010, #280030)",
    emoji: "🌸",
    categoryKey: "Simple Romantic Experience",
  },
    {
    id: "3",
    category: "The Sweetheart Dinner",
    title: "Petals & Serenity",
    description:
      "A romantic candlelight dinner setup in a private space.",
       price: "38,000",
    currency: "KSH",
    badge: "New",
    bgGradient: "linear-gradient(135deg, #0d0010, #280030)",
    emoji: "🌸",
    categoryKey: "Simple Romantic Experience",
  },
 {
    id: "3",
    category: "The Balcony Romance",
    title: "Petals & Serenity",
    description:
      "Transform a balcony into a dreamy romantic dinner setting.",
       price: "38,000",
    currency: "KSH",
    badge: "New",
    bgGradient: "linear-gradient(135deg, #0d0010, #280030)",
    emoji: "🌸",
    categoryKey: "Simple Romantic Experience",
  },

 


  {
    id: "4",
    category: "Fine Dining",
    title: "The Golden Table",
    description:
      "An exclusive 7-course tasting menu in a private candlelit dining room at Nairobi's most celebrated fine dining establishment, with a dedicated sommelier.",
    price: "65,000",
    currency: "KSH",
    bgGradient: "linear-gradient(135deg, #0a0800, #2a2000)",
    emoji: "🕯️",
    categoryKey: "Signature Experience",
  },
  {
    id: "5",
    category: "Safari Romance date",
    title: "Maasai Mara Starfall",
    description:
      "A private twilight game drive followed by a boma dinner under the open sky with local Maasai performers. Fall asleep to the sounds of the wild in your luxury tented camp.",
    price: "280,000",
    currency: "KSH",
    badge: "Exclusive",
    bgGradient: "linear-gradient(135deg, #001a0a, #003d1a)",
    emoji: "🦁",
    categoryKey: "Signature Experience",
  },
  {
    id: "6",
    category: "Arts & Culture",
    title: "An Evening in Art",
    description:
      "A private after-hours gallery tour curated just for the two of you, followed by an art class with a local master artist, then cocktails among the canvases.",
    price: "28,000",
    currency: "KSH",
    badge: "Cultural",
    bgGradient: "linear-gradient(135deg, #1a0505, #3d1010)",
    emoji: "🎭",
    categoryKey: "Cultural",
  },
  {
    id: "7",
    category: "Shooting Range",
    title: "Midnight Garden",
    description:
      "An enchanted rooftop transformed with thousands of fairy lights, live florals, and a private chef preparing a three-course meal under the stars. Serenade included.",
    price: "55,000",
    currency: "KSH",
    badge: "Trending",
    bgGradient: "linear-gradient(135deg, #050015, #150030)",
    emoji: "✨",
    categoryKey: "Premium Experience",
  },
  {
    id: "8",
    category: "Sunset Dining",
    title: "Ngong Hills Twilight",
    description:
      "A guided hike to the peak of Ngong Hills timed perfectly for sunset, followed by a surprise bush picnic with your favourite dishes prepared by a private chef.",
    price: "32,000",
    currency: "KSH",
    bgGradient: "linear-gradient(135deg, #1a0800, #3d2000)",
    emoji: "⛰️",
    categoryKey: "Premium Experience",
  },
];

export interface Category {
  name: string;
  icon: string;
  count: number;
  key: string;
}

export const categories: Category[] = [
  { name: "Sunset & Views", icon: "🌅", count: 12, key: "Sunset" },
  { name: "Fine Dining", icon: "🍽️", count: 18, key: "Dining" },
  { name: "Nature & Safari", icon: "🌿", count: 9, key: "Nature & Safari" },
  { name: "Spa & Wellness", icon: "💆", count: 7, key: "Spa & Wellness" },
  { name: "Rooftop", icon: "🌃", count: 11, key: "Rooftop" },
  { name: "Adventure", icon: "🚁", count: 6, key: "Adventure" },
  { name: "Cultural", icon: "🎭", count: 8, key: "Cultural" },
  { name: "Arts & Music", icon: "🎵", count: 5, key: "Arts" },
];
