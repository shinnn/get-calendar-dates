/*!
 * get-calendar-dates | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/get-calendar-dates
*/
'use strict';

var calendarDateRegex = require('calendar-date-regex');

function assertString(str, fnName) {
  if (typeof str !== 'string') {
    throw new TypeError(
      str +
      ' is not a string. The first argument to ' + fnName + ' must be a string.'
    );
  }
}

module.exports = function getCalendarDates(str, options) {
  assertString(str, 'getCalendarDates');
  return str.match(calendarDateRegex(options)) || [];
};

module.exports.noDay = function getCalendarDatesWithoutDays(str) {
  assertString(str, 'getCalendarDates.noDay');
  return str.match(calendarDateRegex.noDay()) || [];
};
