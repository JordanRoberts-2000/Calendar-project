import React from "react";
import generateCalendarGrid from "../utils/generateCalendarGrid";
import isSezziDayOff from "../utils/calculateDaysOnOne";
import isJordanDayOff from "../utils/calculateDaysOnTwo";

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
          const dateToCheck = new Date(date.year, date.month, date.day);
          const isToday =
          date.day === today.getDate() &&
          date.month === today.getMonth() &&
          date.year === today.getFullYear();
          return (
          <div
            key={`${date.year}-${date.month}-${date.day}-${dateIndex}`}
            className={`${date.isPreviousCarryOver ? 'opacity-30' : 'font-bold'} ${isToday && "text-white"} ${((isJordanDayOff(dateToCheck) && isSezziDayOff(dateToCheck)) && !date.isPreviousCarryOver) && "text-red-500"} h-[12vh] flex justify-center items-center relative`}
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
    <div className="h-32"></div>
  </div>
  )
}

export default Calendar