'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useAddEventDialogStore } from '@/stores/add-event-dialog-store';

import { AddEventForm } from './add-event-form';

export const AddEventDialog = () => {
  const { isOpen, setIsOpen } = useAddEventDialogStore();
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add an event</DialogTitle>
          <DialogDescription>
            Fill out the form below to add a new event. Click save when
            you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <AddEventForm />
      </DialogContent>
    </Dialog>
  );
};
