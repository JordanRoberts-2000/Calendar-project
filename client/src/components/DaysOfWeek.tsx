const DaysOfWeek = ({}) => {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const today = new Date().getDate();
  return (
    <div className="flex mx-4 bg-sky-500 rounded text-white font-bold">
      {days.map((day, i) => (
        <div
          key={i}
          className={`flex-1 flex justify-center text-lg ${today === i && 'text-black'}`}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default DaysOfWeek;
