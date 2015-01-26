# get-calendar-dates

[![NPM version](https://img.shields.io/npm/v/get-calendar-dates.svg?style=flat)](https://www.npmjs.com/package/get-calendar-dates)
[![Bower version](https://img.shields.io/bower/v/get-calendar-dates.svg?style=flat)](https://github.com/shinnn/get-calendar-dates/releases)
[![Build Status](https://travis-ci.org/shinnn/get-calendar-dates.svg?branch=master)](https://travis-ci.org/shinnn/get-calendar-dates)
[![Build status](https://ci.appveyor.com/api/projects/status/3vi5lrvvj8mjg3rt?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/get-calendar-dates)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/get-calendar-dates.svg?style=flat&label=cov)](https://coveralls.io/r/shinnn/get-calendar-dates)
[![Dependency Status](https://img.shields.io/david/shinnn/get-calendar-dates.svg?style=flat&label=deps)](https://david-dm.org/shinnn/get-calendar-dates)
[![devDependency Status](https://img.shields.io/david/dev/shinnn/get-calendar-dates.svg?style=flat&label=devDeps)](https://david-dm.org/shinnn/get-calendar-dates#info=devDependencies)

Get all [ISO calendar dates](http://en.wikipedia.org/wiki/ISO_8601#Calendar_dates) in a string

```javascript
getCalendarDates('2015-01-25 0101 20150126 11112233 2015-13-13');
//=> ['2015-01-25' '20150126']
```

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```sh
npm install get-calendar-dates
```

#### [bower](http://bower.io/)

```sh
bower install get-calendar-dates
```

#### [Duo](http://duojs.org/)

```javascript
var getCalendarDates = require('shinnn/get-calendar-dates');
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/get-calendar-dates/master/browser.js)

## API

### getCalendarDates(*string* [, *options*])

*string*: `String`  
*options*: `Object`  
Return: `Array` of `String`

It returns an array of calender dates (*YYYY-MM-DD* and *YYYYMMDD*) included in the string.

#### options.basic

Type: `Boolean`  
Default: `true`

`false` avoids matching the basic format (*YYYYMMDD*).

```javascript
getCalendarDates('20130413', {basic: false}); //=> []
```

#### options.extended

Type: `Boolean`  
Default: `true`

`false` avoids matching the extended format (*YYYY-MM-DD*).

```javascript
getCalendarDates('2013-04-13', {basic: false}); //=> []
```

### calendarDateRegex.noDay(*string*)

*string*: `String`  
Return: `Array` of `String`

It returns an array of calender dates with reduced precision (*YYYY-MM*) in the string.

```javascript
getCalendarDates.noDay('2015-01 201501'); //=> ['2015-01']
```

## License

Copyright (c) [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
