import { create } from 'zustand';

interface CounterState {
  daysOffToggle: number;
}

const useStore = create<CounterState>((_set) => ({
  daysOffToggle: 0,
}));

export default useStore;
