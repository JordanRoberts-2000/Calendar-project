import React from "react";
import generateCalendarGrid from "../utils/generateCalendarGrid";

const Calendar = ({}) => {
  
  const calendarGrid = generateCalendarGrid();
  return (
    <div className="grid grid-cols-7 flex-1 flex-shrink-0 overflow-y-auto px-4">
    {calendarGrid.map((monthData, index) => (
      <React.Fragment key={index}>
        <div className="col-span-7">
          {monthData.monthName}
        </div>
        {monthData.days.map((date, dateIndex) => (
          <div
            key={`${date.year}-${date.month}-${date.day}-${dateIndex}`}
            className={`${date.isPreviousCarryOver && 'opacity-30'} h-[12vh]`}
          >
            {date.day}
          </div>
        ))}
      </React.Fragment>
    ))}
  </div>
  )
}

export default Calendar