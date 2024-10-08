const isSezziDayOff = (dateToCheck: Date) => {
  const startDate = new Date(2024, 8, 28);
  const daysDiff = daysBetween(startDate, dateToCheck);
  return Math.floor(daysDiff / 4) % 2 !== 0;
}

const daysBetween = (date1: Date, date2: Date): number => {
  const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  return Math.floor((date2.getTime() - date1.getTime()) / oneDay);
};

export default isSezziDayOff