import DateNotes from './DateNotes';
import { Button } from '../ui/button';

type Props = {
  setAddingMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const viewNotesSection = ({ setAddingMode }: Props) => {
  return (
    <>
      <DateNotes />
      <Button
        className="my-4 h-12 text-lg relative"
        onClick={() => setAddingMode(true)}
      >
        <div className="absolute h-6 w-full bg-gradient-to-t mb-3 from-white to-white/0 via-white/50 bottom-full"></div>
        Add event
      </Button>
    </>
  );
};

export default viewNotesSection;
