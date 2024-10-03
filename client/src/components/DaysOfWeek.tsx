const DaysOfWeek = ({}) => {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const today = new Date().getDate();
  return (
    <div className="flex px-4">
      {days.map((day, i) => (
        <div
          key={i}
          className={`flex-1 flex justify-center text-lg ${today === i && 'text-teal-500 font-bold'}`}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default DaysOfWeek;
