import AddEventsSection from './AddEventSection';
import ViewEventsSection from './ViewEventsSection';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { useShallow } from 'zustand/shallow';
import useStore from '@/store';
import { Button } from '../ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '../ui/drawer';
import Icon from '../Icon';

const ViewDateModal = () => {
  const [eventMainTab, eventModalOpen, selectedDate] = useStore(
    useShallow((state) => [
      state.eventMainTab,
      state.eventModalOpen,
      state.selectedDate,
    ])
  );
  const getOrdinalSuffix = (day: number) => {
    if (day > 3 && day < 21) return 'th'; // special case for 11th-13th
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  const formatDateWithOrdinal = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const ordinalSuffix = getOrdinalSuffix(day);

    return `${month} ${day}${ordinalSuffix}`;
  };
  return (
    <Drawer
      open={eventModalOpen}
      onOpenChange={() => useStore.setState(() => ({ eventModalOpen: false }))}
    >
      <DrawerContent className="h-[70vh] px-8 rounded-t-3xl flex flex-col">
        <DrawerHeader>
          <DrawerTitle className="text-2xl">
            {selectedDate && formatDateWithOrdinal(selectedDate)}
          </DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>

        {eventMainTab === 'addEventForm' && (
          <Button
            onClick={() =>
              useStore.setState(() => ({ eventMainTab: 'viewEvents' }))
            }
            className="size-fit p-2 bg-transparent m-2 text-black shadow-none hover:bg-white absolute top-0 left-0"
          >
            <Icon name="left-arrow" className="size-6" />
          </Button>
        )}

        <Button
          onClick={() => useStore.setState(() => ({ eventModalOpen: false }))}
          className="absolute top-0 right-0 m-2 p-2 bg-white text-black hover:bg-white shadow-none"
        >
          <Icon name="close" className="size-6" />
        </Button>
        <Tabs
          value={eventMainTab}
          orientation="vertical"
          className="flex-1 overflow-hidden"
        >
          <TabsContent value="viewEvents" className="h-full overflow-y-auto">
            <ViewEventsSection />
          </TabsContent>

          <TabsContent value="addEventForm" className="h-full overflow-y-auto">
            <AddEventsSection />
          </TabsContent>
        </Tabs>
      </DrawerContent>
    </Drawer>
  );
};

export default ViewDateModal;
