import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import generateCalendarGrid from '../utils/generateCalendarGrid';
import isSezziDayOff from '../utils/calculateDaysOnOne';
import isJordanDayOff from '../utils/calculateDaysOnTwo';
import ViewDateModal from './dateModal/dateModal';

const Calendar = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [addingMode, setAddingMode] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
      setIsOpen(true);
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
      setIsOpen(false);
      setAddingMode(false);
    }
  };
  const calendarGrid = generateCalendarGrid();
  return (
    <>
      <ViewDateModal
        onClose={() => closeDialog()}
        addingMode={addingMode}
        setAddingMode={setAddingMode}
        ref={dialogRef}
      />
      <div className="grid grid-cols-7 flex-1 flex-shrink-0 overflow-y-auto px-4">
        {calendarGrid.map((monthData, index) => (
          <React.Fragment key={index}>
            <div className="col-span-7 flex items-center pt-4 font-sans">
              <h3 className="bg-sky-100 px-3 text-sky-500 mt-4 tracking-wider">
                {monthData.monthName.toUpperCase()}
              </h3>
            </div>
            {monthData.days.map((date, dateIndex) => {
              const today = new Date();
              const dateToCheck = new Date(date.year, date.month, date.day);
              const todayWithoutTime = new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate()
              );
              const isToday =
                date.day === today.getDate() &&
                date.month === today.getMonth() &&
                date.year === today.getFullYear();
              return (
                <button
                  onClick={openDialog}
                  disabled={
                    date.isPreviousCarryOver || dateToCheck < todayWithoutTime
                  }
                  key={`${date.year}-${date.month}-${date.day}-${dateIndex}`}
                  className={clsx(
                    {
                      'opacity-30': date.isPreviousCarryOver,
                      'font-bold': !date.isPreviousCarryOver,
                      'text-white': isToday,
                      'text-rose-500 text-2xl':
                        isJordanDayOff(dateToCheck) &&
                        isSezziDayOff(dateToCheck) &&
                        !date.isPreviousCarryOver &&
                        !isToday,
                    },
                    'h-[10vh] flex justify-center items-center relative border-b border-b-sky-300'
                  )}
                >
                  {isToday && (
                    <span className="absolute top-1/2 left-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2 bg-sky-300 -z-10 rounded-full aspect-square "></span>
                  )}
                  {/* {!isToday && !date.isPreviousCarryOver && (
                    <span className="absolute bottom-4 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-sky-600 -z-10 size-1.5 rounded-full"></span> // h-0.5 w-6 // size-1.5 rounded-full
                  )} */}
                  {date.day}
                </button>
              );
            })}
          </React.Fragment>
        ))}
        <div className="h-32"></div>
      </div>
    </>
  );
};

export default Calendar;
