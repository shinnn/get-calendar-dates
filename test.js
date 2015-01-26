'use strict';

var requireBowerFiles = require('require-bower-files');
var test = require('tape');

function runTest(description, main) {
  test(description, function(t) {
    t.plan(6);

    t.equal(main.name, 'getCalendarDates', 'should have a function name.');

    t.deepEqual(
      main('foo  1234-01-23 12340123 1111bar1013;;;'),
      ['1234-01-23', '12340123'],
      'should matches calendar dates.'
    );

    t.deepEqual(
      main('11119999'),
      [],
      'should return an empty array when it matches nothing.'
    );

    t.deepEqual(
      main('00001122 0000-11-22', {basic: false}),
      ['0000-11-22'],
      'should drop support for the basic format when `basic` option is false.'
    );

    t.deepEqual(
      main('00001122 0000-11-22', {extended: false}),
      ['00001122'],
      'should drop support for the extended format when `extended` option is false.'
    );

    t.throws(
      main.bind(null, 123),
      /TypeError.* is not a string.*The first argument to getCalendarDates must be a string\./,
      'should throw a type error when the first argument is not a string.'
    );
  });

  test(description + '.noDay', function(t) {
    t.plan(4);

    t.equal(main.noDay.name, 'getCalendarDatesWithoutDays', 'should have a function name.');

    t.deepEqual(
      main.noDay('1111-11 001234-2143 1111-01-01'),
      ['1111-11', '1111-01'],
      'should matches calendar dates with reduced precision.'
    );

    t.deepEqual(
      main.noDay('111199'),
      [],
      'should return an empty array when it matches nothing.'
    );

    t.throws(
      main.bind(null, 123),
      /TypeError.* is not a string.*The first argument to getCalendarDates must be a string\./,
      'should throw a type error when the first argument is not a string.'
    );
  });
}

runTest('require(\'get-calendar-dates\')', require('./'));

global.window = {};
requireBowerFiles({self: true});

runTest('window.getCalendarDates', window.getCalendarDates);
