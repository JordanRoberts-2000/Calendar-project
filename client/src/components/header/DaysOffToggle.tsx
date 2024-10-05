import useStore, { type DaysOffToggle } from '../../store';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';
import EventIcon from '../EventIcon';

const DaysOffToggle = ({}) => {
  const daysOffToggle = useStore((state) => state.daysOffToggle);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false); // State to control popover open/close

  const handleOptionClick = (newToggleValue: DaysOffToggle) => {
    useStore.setState(() => ({ daysOffToggle: newToggleValue }));
    setIsPopoverOpen(false); // Close the popover
  };
  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger className="ml-2 mb-4">
        {daysOffToggle === 'shared' && (
          <EventIcon eventType="group" className="size-6" />
        )}
        {daysOffToggle === 'sezzi' && (
          <EventIcon eventType="woman" className="size-6" />
        )}
        {daysOffToggle === 'jordan' && (
          <EventIcon eventType="man" className="size-6" />
        )}
      </PopoverTrigger>
      <PopoverContent className="ml-4 w-fit text-sm font-semibold text-gray-500">
        <div className="flex flex-col gap-4">
          <button
            className="flex gap-4 items-center"
            onClick={() => handleOptionClick('shared')}
          >
            <EventIcon eventType="group" className="size-6" />
            <p>Show shared days off</p>
          </button>
          <button
            className="flex gap-4 items-center"
            onClick={() => handleOptionClick('sezzi')}
          >
            <EventIcon eventType="woman" className="size-6" />
            <p>Show Sezzi's days off</p>
          </button>
          <button
            className="flex gap-4 items-center"
            onClick={() => handleOptionClick('jordan')}
          >
            <EventIcon eventType="man" className="size-6" />
            <p>Show Jordan's days off</p>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DaysOffToggle;
