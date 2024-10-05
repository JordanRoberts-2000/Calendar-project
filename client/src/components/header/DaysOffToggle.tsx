import useStore, { type DaysOffToggle } from '../../store';
import groupIcon from '../../assets/svgs/group.svg';
import JordansIcon from '../../assets/svgs/man.svg';
import SarahsIcon from '../../assets/svgs/woman.svg';
import { ReactSVG } from 'react-svg';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';

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
          <ReactSVG
            className="size-6 flex justify-center items-center"
            src={groupIcon}
          />
        )}
        {daysOffToggle === 'sezzi' && (
          <ReactSVG
            className="size-6 flex justify-center items-center"
            src={SarahsIcon}
          />
        )}
        {daysOffToggle === 'jordan' && (
          <ReactSVG
            className="size-6 flex justify-center items-center"
            src={JordansIcon}
          />
        )}
      </PopoverTrigger>
      <PopoverContent className="ml-4 w-fit text-sm font-semibold text-gray-500">
        <div className="flex flex-col gap-4">
          <button
            className="flex gap-4 items-center"
            onClick={() => handleOptionClick('shared')}
          >
            <ReactSVG
              className="size-6 flex justify-center items-center"
              src={groupIcon}
            />
            <p>Show shared days off</p>
          </button>
          <button
            className="flex gap-4 items-center"
            onClick={() => handleOptionClick('sezzi')}
          >
            <ReactSVG
              className="size-6 flex justify-center items-center"
              src={SarahsIcon}
            />
            <p>Show Sezzi's days off</p>
          </button>
          <button
            className="flex gap-4 items-center"
            onClick={() => handleOptionClick('jordan')}
          >
            <ReactSVG
              className="size-6 flex justify-center items-center"
              src={JordansIcon}
            />
            <p>Show Jordan's days off</p>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DaysOffToggle;
