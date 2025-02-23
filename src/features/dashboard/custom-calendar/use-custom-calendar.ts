import { useCallback, useState } from 'react';
import { type View } from 'react-big-calendar';

export const useCustomCalendar = () => {
  const [view, setView] = useState<View>('week');
  const [date, setDate] = useState<Date>(new Date());
  const onView = useCallback((view: View) => {
    setView(view);
  }, []);

  const onNavigate = useCallback((date: Date) => {
    setDate(date);
  }, []);

  return {
    view,
    date,
    onView,
    onNavigate,
  };
};
