type CalendarDay = {
  day: number;
  month: number;
  year: number;
  isPreviousCarryOver: boolean;
}

const getDaysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();

const getFirstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();

const generateCalendarGrid = () => {
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  // up to 3 months
  const months = [];
  for (let offset = 0; offset < 3; offset++) {
    const month = (currentMonth + offset) % 12;
    const year = currentYear + Math.floor((currentMonth + offset) / 12);
    months.push({ month, year });
  }

  // Generate grid
  const grid: CalendarDay[] = [];

  months.forEach(({ month, year }) => {
    const daysInMonth = getDaysInMonth(month, year);
    const firstDayOfMonth = getFirstDayOfMonth(month, year);
    
    // Calculate how many days to show from the previous month to align with Monday
    const daysFromPrevMonth = (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1);
    
    // Get previous month's info
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevMonthYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = getDaysInMonth(prevMonth, prevMonthYear);

    // Add previous month's days
    for (let i = daysInPrevMonth - daysFromPrevMonth + 1; i <= daysInPrevMonth; i++) {
      grid.push({
        day: i,
        month: prevMonth,
        year: prevMonthYear,
        isPreviousCarryOver: false,
      });
    }

    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      grid.push({
        day: i,
        month: month,
        year: year,
        isPreviousCarryOver: true,
      });
    }
  });

  return grid;

}

export default generateCalendarGrid