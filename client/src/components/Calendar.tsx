import generateCalendarGrid from "../utils/generateCalendarGrid";

const Calendar = ({}) => {
  
  const calendarGrid = generateCalendarGrid();
  return (
    <div className="grid grid-cols-7">
      {calendarGrid.map((date, index) => (
        <div key={index} className="border border-neutral-300 aspect-[2/1] flex justify-center items-center">{date.day}</div>
      ))}
    </div>
  )
}

export default Calendar