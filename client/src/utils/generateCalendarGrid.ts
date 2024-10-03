const NUMBER_OF_GENERATED_MONTHS = 12;

type CalendarDay = {
  day: number;
  month: number;
  year: number;
  isPreviousCarryOver: boolean;
}

const getDaysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();

const getFirstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();

const generateCalendarGrid = (): { days: CalendarDay[]; monthName: string }[] => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  const months: { month: number; year: number }[] = [];
  
  // Generate months for the current and the next 12 months
  for (let offset = 0; offset <= NUMBER_OF_GENERATED_MONTHS; offset++) {
    const month = (currentMonth + offset) % 12;
    const year = currentYear + Math.floor((currentMonth + offset) / 12);
    months.push({ month, year });
  }

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const grid: { days: CalendarDay[]; monthName: string }[] = [];

  months.forEach(({ month, year }) => {
    const daysInMonth = getDaysInMonth(month, year);
    const firstDayOfMonth = getFirstDayOfMonth(month, year);
    
    const daysFromPrevMonth = (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1);
    
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevMonthYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = getDaysInMonth(prevMonth, prevMonthYear);

    const currentMonthGrid: CalendarDay[] = [];

    for (let i = daysInPrevMonth - daysFromPrevMonth + 1; i <= daysInPrevMonth; i++) {
      currentMonthGrid.push({
        day: i,
        month: prevMonth,
        year: prevMonthYear,
        isPreviousCarryOver: true,
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      currentMonthGrid.push({
        day: i,
        month,
        year,
        isPreviousCarryOver: false,
      });
    }

    grid.push({
      days: currentMonthGrid,
      monthName: monthNames[month],
    });
  });
  return grid;
};

export default generateCalendarGrid