/*!
 * get-calendar-dates | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/get-calendar-dates
*/
(function() {
  'use strict';

  function assertString(str, fnName) {
    if (typeof str !== 'string') {
      throw new TypeError(
        str +
        ' is not a string. The first argument to ' + fnName + ' must be a string.'
      );
    }
  }

  window.getCalendarDates = function getCalendarDates(str, options) {
    assertString(str, 'getCalendarDates');
    return str.match(window.calendarDateRegex(options)) || [];
  };

  window.getCalendarDates.noDay = function getCalendarDatesWithoutDays(str) {
    assertString(str, 'getCalendarDates.noDay');
    return str.match(window.calendarDateRegex.noDay()) || [];
  };
}());
