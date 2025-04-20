export const HOUR_ARRAY = Array.from({ length: 13 }, (_, i) => ({
  id: i + 9,
  hour: i + 9,
}));

export const MORNING_HOURS = HOUR_ARRAY.filter((hour) => hour.hour < 15);
export const NOON_HOURS = HOUR_ARRAY.filter((hour) => hour.hour >= 15);

export const CALENDAR_DAYS = [
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY',
];
