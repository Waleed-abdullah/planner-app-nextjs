import { type Category } from '@/libs/db/schemas';

export const CATEGORIES: Record<
  (typeof Category.enumValues)[number],
  {
    label: string;
    color: string;
  }
> = {
  ACTIVITIES: { label: '🎯 Activities', color: '#32CD32' },
  ARTS_CULTURE: { label: '🎨 Arts & Culture', color: '#BA55D3' },
  BAKERIES: { label: '🥖 Bakeries', color: '#FFB266' },
  BARS: { label: '🍺 Bars', color: '#CC9900' },
  BREAKFAST: { label: '🍳 Breakfast', color: '#FF9933' },
  CAFES: { label: '☕ Cafes', color: '#996633' },
  DINNER: { label: '🍽️ Dinner', color: '#FF8000' },
  KID_FRIENDLY: { label: '🔵 Kid Friendly', color: '#1E90FF' },
  LATE_NIGHT_FOOD: { label: '🌙 Late Night Food', color: '#800080' },
  LIVE_ENTERTAINMENT: { label: '🎭 Live Entertainment', color: '#BA55D3' },
  LODGING: { label: '📈 Lodging', color: '#4169E1' },
  LUNCH: { label: '🥪 Lunch', color: '#FFB266' },
  MARKETS: { label: '🏪 Markets', color: '#FFA500' },
  NEIGHBORHOODS: { label: '🏘️ Neighborhoods', color: '#778899' },
  NIGHTLIFE: { label: '🌃 Nightlife', color: '#4B0082' },
  OUTDOOR_DRINKS: { label: '🍹 Outdoor Drinks', color: '#FFD700' },
  PARKS_NATURE: { label: '🌲 Parks & Nature', color: '#228B22' },
  SERVICES: { label: '🔧 Services', color: '#778899' },
  SHOPPING: { label: '🛍️ Shopping', color: '#FF69B4' },
  SIGHTSEEING: { label: '🔭 Sightseeing', color: '#1E90FF' },
  WEEKEND_TRIPS: { label: '🎒 Weekend Trips', color: '#20B2AA' },
  WORKSPACES: { label: '💻 Workspaces', color: '#778899' },
};
