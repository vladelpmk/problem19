const getYearMonths = (year) => {
  const LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const NON_LEAP_YEAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))
    ? LEAP_YEAR
    : NON_LEAP_YEAR;
};

let firstSundays = 0;
let dayOfTheWeek = 2;

for (let year = 1901; year <= 2000; year++) {
  const months = getYearMonths(year);
  for (let month = 0; month < 12; month++) {
    if (dayOfTheWeek == 0) {
        firstSundays++;
    }
    dayOfTheWeek = (dayOfTheWeek + months[month]) % 7;
  }
}

console.info(`${firstSundays} days`); //171 days
