const DaysOfWeek = ({}) => {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div className="flex px-4">
      {days.map((day, i) => (
        <div key={i} className="flex-1 flex justify-center">{day}</div>
      ))}
    </div>
  )
}

export default DaysOfWeek