import React from "react";
import generateCalendarGrid from "../utils/generateCalendarGrid";

const Calendar = ({}) => {
  
  const calendarGrid = generateCalendarGrid();
  return (
    <div className="grid grid-cols-7 flex-1 flex-shrink-0 overflow-y-auto px-4">
    {calendarGrid.map((monthData, index) => (
      <React.Fragment key={index}>
        <div className="col-span-7 flex items-center pt-4 text-xl font-sans">
          {monthData.monthName}
        </div>
        {monthData.days.map((date, dateIndex) => {
          const today = new Date();
          const isToday =
          date.day === today.getDate() &&
          date.month === today.getMonth() &&
          date.year === today.getFullYear();
          return (
          <div
            key={`${date.year}-${date.month}-${date.day}-${dateIndex}`}
            className={`${date.isPreviousCarryOver ? 'opacity-30' : 'font-bold'} ${isToday && "text-white"} h-[12vh] flex justify-center items-center relative`}
          >
            {isToday && 
              <div className="absolute top-1/2 left-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2 bg-red-500 -z-10 rounded-full aspect-square ">

              </div>
            }
            {date.day}
          </div>
)})}
      </React.Fragment>
    ))}
  </div>
  )
}

export default Calendar