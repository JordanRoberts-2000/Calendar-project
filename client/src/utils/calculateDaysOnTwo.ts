const isJordanDayOff = (dateToCheck: Date): boolean => {
  const startDate = new Date(2024, 6, 14);
  const msPerDay = 24 * 60 * 60 * 1000;
  const daysDifference = Math.floor((dateToCheck.getTime() - startDate.getTime()) / msPerDay);
  const weeksPassed = Math.floor(daysDifference / 7);
  const cycleWeek = weeksPassed % 26;

  let workDays: number[] = [];

  if (cycleWeek < 13) {
    workDays = [0,1,2];
  } else if (cycleWeek === 13){
    workDays = [3, 4, 5]
  } else if (cycleWeek === 26){
    workDays = []
  } else {
    workDays = [3, 4, 5];
  }
  const dayOfWeek = dateToCheck.getDay();
  return !workDays.includes(dayOfWeek);
};

export default isJordanDayOff;
