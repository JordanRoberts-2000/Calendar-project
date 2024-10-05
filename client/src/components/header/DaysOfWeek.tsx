const DaysOfWeek = ({}) => {
  const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const today = new Date().getDate();
  return (
    <div className="flex mx-4 font-bold shadow rounded-lg py-1 text-neutral-600">
      {days.map((day, i) => (
        <div
          key={i}
          className={`flex-1 flex justify-center text-lg ${today === i && 'text-blue-600'}`}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default DaysOfWeek;
