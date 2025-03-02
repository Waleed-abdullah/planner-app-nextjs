'use client';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';

import dayjs from 'dayjs';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import { useCustomCalendar } from './use-custom-calendar';

const localizer = dayjsLocalizer(dayjs);
const DnDCalendar = withDragAndDrop(Calendar);

export const CustomCalendar = () => {
  const { date, view, onView, onNavigate, events, handleUpdateEvent } =
    useCustomCalendar();
  return (
    <DnDCalendar
      localizer={localizer}
      draggableAccessor={() => true}
      defaultView="week"
      views={['month', 'week', 'day']}
      onView={onView}
      view={view}
      showMultiDayTimes
      onNavigate={onNavigate}
      date={date}
      events={events}
      onEventResize={handleUpdateEvent}
      onEventDrop={handleUpdateEvent}
    />
  );
};
