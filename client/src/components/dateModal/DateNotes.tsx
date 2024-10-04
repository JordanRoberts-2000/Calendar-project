import notes from '../../dateNotes.json';
import icon from '../../assets/svgs/chore.svg';
import { ReactSVG } from 'react-svg';

const DateNotes = ({}) => {
  return (
    <div className="flex-1 flex-shrink-0 overflow-y-auto flex flex-col gap-4 py-6 relative">
      {notes.map((note) => (
        <div
          key={note.id}
          className="flex gap-4 border border-neutral-300 p-3 rounded-md shadow-md"
        >
          <ReactSVG
            src={icon}
            className="size-8 flex justify-center items-center"
          />
          <p className="font-medium text-neutral-600">{note.note}</p>
        </div>
      ))}
    </div>
  );
};

export default DateNotes;
