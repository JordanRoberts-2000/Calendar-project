type Props = {
  setAddingMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const addNotesSection = ({ setAddingMode }: Props) => {
  return (
    <div>
      time to add notes
      <button onClick={() => setAddingMode(false)}>back</button>
    </div>
  );
};

export default addNotesSection;
