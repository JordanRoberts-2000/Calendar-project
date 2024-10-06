import { create } from 'zustand';

export type DaysOffToggle = 'shared' | 'jordan' | 'sezzi';

interface CounterState {
  eventModalOpen: boolean;
  daysOffToggle: DaysOffToggle;
  eventMainTab: 'viewEvents' | 'addEventForm';
  eventTypeTab: 'shared' | 'private';
  selectedDate: Date | null;
}

const useStore = create<CounterState>((_set) => ({
  eventModalOpen: false,
  daysOffToggle: 'shared',
  eventMainTab: 'viewEvents',
  eventTypeTab: 'shared',
  selectedDate: null,
}));

export default useStore;
