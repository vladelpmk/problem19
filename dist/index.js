"use strict";

var getYearMonths = function getYearMonths(year) {
  var LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var NON_LEAP_YEAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) ? LEAP_YEAR : NON_LEAP_YEAR;
};

var firstSundays = 0;
var dayOfTheWeek = 2;

for (var year = 1901; year <= 2000; year++) {
  var months = getYearMonths(year);
  for (var month = 0; month < 12; month++) {
    if (dayOfTheWeek == 0) {
      firstSundays++;
    }
    dayOfTheWeek = (dayOfTheWeek + months[month]) % 7;
  }
}

console.info(firstSundays + " days");