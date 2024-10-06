import { create } from 'zustand';
import { type EventCategory } from './components/EventIcon';

export type DaysOffToggle = 'shared' | 'jordan' | 'sezzi';

interface CounterState {
  eventModalOpen: boolean;
  daysOffToggle: DaysOffToggle;
  eventMainTab: 'viewEvents' | 'addEventForm';
  eventTypeTab: 'shared' | 'private';
  addEventIconSelection: EventCategory;
}

const useStore = create<CounterState>((_set) => ({
  eventModalOpen: false,
  daysOffToggle: 'shared',
  eventMainTab: 'viewEvents',
  eventTypeTab: 'shared',
  addEventIconSelection: 'default',
}));

export default useStore;
