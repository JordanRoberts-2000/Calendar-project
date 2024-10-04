const DaysOfWeek = ({}) => {
  const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const today = new Date().getDate();
  return (
    <div className="flex mx-4 font-bold bg-sky-300 rounded-lg py-1 text-white">
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
