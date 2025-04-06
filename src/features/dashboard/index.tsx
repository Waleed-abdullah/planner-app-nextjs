import { AddEventDialog } from './add-event-dialog';
import { CustomCalendar } from './custom-calendar';
import { ShareDialog } from './share-dialog';

export const Dashboard = () => {
  return (
    <div className="flex h-full w-full flex-col gap-2 overflow-auto px-2 py-8">
      <div className="flex items-center gap-4">
        <AddEventDialog />
        <ShareDialog />
      </div>
      <CustomCalendar />
    </div>
  );
};
