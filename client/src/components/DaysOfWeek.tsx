const DaysOfWeek = ({}) => {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div className="flex">
      {days.map((day) => (
        <div className="flex-1 flex justify-center">{day}</div>
      ))}
    </div>
  )
}

export default DaysOfWeek