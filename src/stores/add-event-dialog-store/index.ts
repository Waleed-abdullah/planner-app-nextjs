// create a zustand store to store dialog open state

import { create } from 'zustand';

type AddEventDialogStore = {
  isOpen: boolean;
  startTime: Date | null;
  openDialog: (startTime?: Date) => void;
  closeDialog: () => void;
  setIsOpen: (isOpen: boolean) => void;
  setStartTime: (startTime: Date | null) => void;
};

export const useAddEventDialogStore = create<AddEventDialogStore>((set) => ({
  isOpen: false,
  startTime: null,
  openDialog: (startTime) => set({ isOpen: true, startTime }),
  closeDialog: () => set({ isOpen: false, startTime: null }),
  setStartTime: (startTime) => set({ startTime }),
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));
