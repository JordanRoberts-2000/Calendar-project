import DateNotes from '../DateNotes';

type Props = {
  setAddingMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const viewNotesSection = ({ setAddingMode }: Props) => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <DateNotes />
      <div>
        <button
          onClick={() => setAddingMode(true)}
          className="bg-red-500 text-white w-full py-2 rounded-md font-bold text-xl"
        >
          Add Event
        </button>
      </div>
    </div>
  );
};

export default viewNotesSection;
