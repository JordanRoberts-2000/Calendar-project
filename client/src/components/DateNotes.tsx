import notes from '../dateNotes.json';

const DateNotes = ({}) => {
  return (
    <>
      <div>Notes:</div>
      <div className="bg-sky-50 rounded-xl flex-1 flex-shrink-0 overflow-y-auto">
        {notes.map((note) => (
          <div key={note.id}>{note.note}</div>
        ))}
      </div>
    </>
  );
};

export default DateNotes;
