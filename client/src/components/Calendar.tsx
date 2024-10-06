import { Fragment } from 'react';
import clsx from 'clsx';
import generateCalendarGrid from '../utils/generateCalendarGrid';
import isSezziDayOff from '../utils/calculateDaysOnOne';
import isJordanDayOff from '../utils/calculateDaysOnTwo';
import EventsModal from './dateModal/EventsModal';
import useStore from '../store';

const Calendar = ({}) => {
  const calendarGrid = generateCalendarGrid();
  const daysOffToggle = useStore((state) => state.daysOffToggle);
  return (
    <>
      <EventsModal />
      <div className="grid grid-cols-7 flex-1 flex-shrink-0 overflow-y-auto px-4">
        {calendarGrid.map((monthData, index) => (
          <Fragment key={index}>
            <div className="col-span-7 flex items-center pt-4">
              <h3 className="py-1 px-3 rounded-lg font-bold shadow mt-4 text-sm text-neutral-600">
                {monthData.monthName}
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
              let check = false; // This will store the result of your checks

              switch (daysOffToggle) {
                case 'shared':
                  check =
                    isJordanDayOff(dateToCheck) && isSezziDayOff(dateToCheck);
                  break;
                case 'sezzi':
                  check = isSezziDayOff(dateToCheck);
                  break;
                case 'jordan':
                  check = isJordanDayOff(dateToCheck);
                  break;
                default:
                  break;
              }
              return (
                <button
                  onClick={() => {
                    useStore.setState(() => ({ eventModalOpen: true }));
                    useStore.setState(() => ({ selectedDate: dateToCheck }));
                  }}
                  disabled={
                    date.isPreviousCarryOver || dateToCheck < todayWithoutTime
                  }
                  key={`${date.year}-${date.month}-${date.day}-${dateIndex}`}
                  className={clsx(
                    {
                      'opacity-30': date.isPreviousCarryOver,
                      'font-bold': !date.isPreviousCarryOver,
                      'text-white': isToday,
                      'text-red-500':
                        check && !date.isPreviousCarryOver && !isToday,
                    },
                    'h-[10vh] flex justify-center items-center relative border-b border-b-neutral-300'
                  )}
                >
                  {isToday && (
                    <span className="absolute top-1/2 left-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2 bg-neutral-900 -z-10 rounded-xl aspect-square "></span>
                  )}
                  {/* {!isToday && !date.isPreviousCarryOver && (
                    <span className="absolute bottom-4 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-sky-600 -z-10 size-1.5 rounded-full"></span> // h-0.5 w-6 // size-1.5 rounded-full
                  )} */}
                  {date.day}
                </button>
              );
            })}
          </Fragment>
        ))}
        <div className="h-32"></div>
      </div>
    </>
  );
};

export default Calendar;
