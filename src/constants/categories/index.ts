import { type Category } from '@/libs/db/schemas';

export const CATEGORIES: Record<
  (typeof Category.enumValues)[number],
  {
    label: string;
    color: string;
  }
> = {
  // FOOD
  BREAKFAST: { label: '🔍 Breakfast', color: '#FF9933' },
  LUNCH: { label: '🍽️ Lunch', color: '#FFB266' },
  DINNER: { label: '🍽️ Dinner', color: '#FF8000' },
  CAFES: { label: '☕ Cafes', color: '#996633' },

  // DRINKS
  BEER_GARDENS: { label: '🍻 Beer Gardens', color: '#FFD700' },
  BARS: { label: '🍸 Bars', color: '#CC9900' },

  // NIGHTLIFE
  NIGHTLIFE: { label: '🌃 Nightlife', color: '#4B0082' },
  LATE_NIGHT_FOOD: { label: '🍔 Late Night Food', color: '#800080' },

  // STAY
  ACCOMMODATIONS: { label: '💤 Accommodations', color: '#4169E1' },
  PARKS_NATURE: { label: '🌿 Parks & Nature', color: '#228B22' },

  // TOURISM
  SIGHTSEEING: { label: '🗺️ Sightseeing', color: '#1E90FF' },
  MARKETS: { label: '🌻 Markets', color: '#FFA500' },

  // CULTURE
  SHOPPING: { label: '🛍️ Shopping', color: '#FF69B4' },
  ARTS_CULTURE: { label: '🎭 Arts & Culture', color: '#BA55D3' },

  // ACTIVITIES
  ACTIVITIES: { label: '🏆 Activities', color: '#32CD32' },
  DAY_TRIPS: { label: '🥾 Day Trips', color: '#20B2AA' },

  // TRANSPORT
  TRANSPORTATION: { label: '🚉 Transportation', color: '#778899' },
  KID_FRIENDLY: { label: '🎈 Kid Friendly', color: '#FF69B4' },
};
