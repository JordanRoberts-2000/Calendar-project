import useStore from '@/store';
import EventIcon, { EventCategory } from '../EventIcon';

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SelectIconPopover = ({ setOpen }: Props) => {
  const handleIconClick = (iconType: EventCategory) => {
    useStore.setState(() => ({ addEventIconSelection: iconType }));
    setOpen(false);
  };

  return (
    <div className="grid grid-cols-4 gap-8">
      {(
        [
          'car',
          'chore',
          'clock',
          'date',
          'default',
          'film',
          'food',
          'group',
          'gym',
          'happy',
          'holiday',
          'man',
          'sad',
          'shopping',
          'warning',
          'woman',
        ] as EventCategory[]
      ).map((iconType) => (
        <button
          key={iconType}
          className="focus:outline-none"
          onClick={() => handleIconClick(iconType)}
        >
          <EventIcon eventType={iconType} className="size-6" />
        </button>
      ))}
    </div>
  );
};

export default SelectIconPopover;
