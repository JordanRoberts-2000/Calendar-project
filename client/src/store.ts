import { create } from 'zustand';

export type DaysOffToggle = 'shared' | 'jordan' | 'sezzi';

interface CounterState {
  daysOffToggle: DaysOffToggle;
  eventTabs: 'viewEvents' | 'addEventForm';
  eventTypeTabs: 'shared' | 'private';
}

const useStore = create<CounterState>((_set) => ({
  daysOffToggle: 'shared',
  eventTabs: 'viewEvents',
  eventTypeTabs: 'shared',
}));

export default useStore;
