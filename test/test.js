if (typeof module !== 'undefined' && module.exports) {
    var QUnit = require('qunitjs');
    require('qunit-tap')(QUnit, console.log);
    var DateFormatter = require('../src/dateformatter.js');
    var TimezoneManager = require('../src/timezonemanager.js');
}

var locales = {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    daysShort: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    dayAppendix: [
        'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
        'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th'
    ],
    months: [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',
        'December'
    ],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    ampm: ['am', 'pm']
};

var timestamp = 1461457983060;
var timestampObject = new Date(timestamp);
var dayISO = 7;
var dayCount = 115;
var daysOfMonth = 30;
var week = 16;
var yearISO = 2016;
var leapYear = 1;
var summerTime = 1;
var dayString = 'Sunday';
var dayShortString = 'Sun';
var dayAppendix = 'th';
var monthString = 'April';
var monthShortString = 'Apr';
var ampm = 'am';

QUnit.test('Test creating a new DateFormatter object', function(assert) {
    var formatter = new DateFormatter();
    assert.deepEqual(formatter, new DateFormatter());
});

QUnit.test('Test number as locale settings (should throw TypeError)', function(assert) {
    var formatter = new DateFormatter();
    assert.expect(2);
    assert.throws(function() {
        formatter.setLocaleSettings(5);
    }, TypeError);
    assert.deepEqual(formatter.getLocaleString(), null);
});

QUnit.test('Test string as locale settings', function(assert) {
    var formatter = new DateFormatter();
    var localeString = JSON.stringify(locales);
    formatter.setLocaleSettings(localeString);
    assert.expect(2);
    assert.deepEqual(formatter.getLocaleString(), localeString);
    assert.deepEqual(formatter.getLocaleSettings(), locales);
});

QUnit.test('Test json object as locale settings', function(assert) {
    var formatter = new DateFormatter();
    formatter.setLocaleSettings(locales);
    assert.deepEqual(formatter.getLocaleSettings(), locales);
});

QUnit.test('Test getDate function', function(assert) {
    var formatter = new DateFormatter();
    assert.deepEqual(formatter.getDate(timestamp), timestampObject);
});

QUnit.test('Test format character d (day, 01-31)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('d', timestampObject), timestampObject.getDate() < 10 ? '0' + timestampObject.getDate() : timestampObject.getDate());
});

QUnit.test('Test format character D (short name of the day)', function(assert) {
    var formatter = new DateFormatter();
    formatter.setLocaleSettings(locales);
    assert.equal(formatter.format('D', timestampObject), dayShortString);
});

QUnit.test('Test format character j (day, 1-31', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('j', timestampObject), timestampObject.getDate());
});

QUnit.test('Test format character l (name of the day)', function(assert) {
    var formatter = new DateFormatter();
    formatter.setLocaleSettings(locales);
    assert.equal(formatter.format('l', timestampObject), dayString);
});

QUnit.test('Test format character N (ISO presentation of the day, monday 1-7 sunday)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('N', timestampObject), dayISO);
});

QUnit.test('Test format character S (day appendix)', function(assert) {
    var formatter = new DateFormatter();
    formatter.setLocaleSettings(locales);
    assert.equal(formatter.format('S', timestampObject), dayAppendix);
});

QUnit.test('Test format character w (numeric presentation of the day, sunday 0-6 saturday)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('w', timestampObject), timestampObject.getDay() === 0 ? '0' : timestampObject.getDay());
});

QUnit.test('Test format character z (day of the year)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('z', timestampObject), dayCount);
});

QUnit.test('Test format character W (week)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('W', timestampObject), week);
});

QUnit.test('Test format character F (name of the month)', function(assert) {
    var formatter = new DateFormatter();
    formatter.setLocaleSettings(locales);
    assert.equal(formatter.format('F', timestampObject), monthString);
});

QUnit.test('Test format character m (month, 01-12)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('m', timestampObject), timestampObject.getMonth() < 9 ? '0' + (timestampObject.getMonth() + 1) : (timestampObject.getMonth() + 1));
});

QUnit.test('Test format character M (short name of the month)', function(assert) {
    var formatter = new DateFormatter();
    formatter.setLocaleSettings(locales);
    assert.equal(formatter.format('M', timestampObject), monthShortString);
});

QUnit.test('Test format character n (month, 1-12)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('n', timestampObject), timestampObject.getMonth() + 1);
});

QUnit.test('Test format character t (number of days of the month)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('t', timestampObject), daysOfMonth);
});

QUnit.test('Test format character L (leap year)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('L', timestampObject), leapYear);
});

QUnit.test('Test format character o (ISO representation of the year)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('o', timestampObject), yearISO);
});

QUnit.test('Test format character Y (year, four digits)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('Y', timestampObject), timestampObject.getFullYear());
});

QUnit.test('Test format character y (year, two digits)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('y', timestampObject), timestampObject.getFullYear().toString().substr(2));
});

QUnit.test('Test format character a (am, pm)', function(assert) {
    var formatter = new DateFormatter();
    formatter.setLocaleSettings(locales);
    assert.equal(formatter.format('a', timestampObject), ampm);
});

QUnit.test('Test format character A (AM, PM)', function(assert) {
    var formatter = new DateFormatter();
    formatter.setLocaleSettings(locales);
    assert.equal(formatter.format('A', timestampObject), ampm.toUpperCase());
});

QUnit.test('Test format character B (Swatch internet time)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('B', timestampObject), Math.round((((timestampObject.getHours() * 60) + timestampObject.getMinutes() * 60) + timestampObject.getSeconds()) / 86.4));
});

QUnit.test('Test format character g (12 hour format, 1-12)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('g', timestampObject), timestampObject.getHours() > 12 ? timestampObject.getHours() - 12 : timestampObject.getHours());
});

QUnit.test('Test format character G (24 hour format, 0-23)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('G', timestampObject), timestampObject.getHours());
});

QUnit.test('Test format character h (12 hour format, 01-12)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('h', timestampObject), timestampObject.getHours() > 12 ? (timestampObject.getHours() - 12 < 10 ? '0' + (timestampObject.getHours() - 12) : timestampObject.getHours() - 12) : (timestampObject.getHours() < 10 ? '0' + timestampObject.getHours() : timestampObject.getHours()));
});

QUnit.test('Test format character H (24 hour format, 00-23)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('H', timestampObject), timestampObject.getHours() < 10 ? '0' + timestampObject.getHours() : timestampObject.getHours());
});

QUnit.test('Test format character i (minutes, 00-59)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('i', timestampObject), timestampObject.getMinutes() < 10 ? '0' + timestampObject.getMinutes() : timestampObject.getMinutes());
});

QUnit.test('Test format character s (seconds, 00-59)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('s', timestampObject), timestampObject.getSeconds() < 10 ? '0' + timestampObject.getSeconds() : timestampObject.getSeconds());
});

QUnit.test('Test format character u (microseconds)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('u', timestampObject), timestampObject.getMilliseconds() * 1000);
});

QUnit.test('Test format character e (timezone)', function(assert) {
    var formatter = new DateFormatter();
    var formatted = formatter.format('e', timestampObject);
    assert.expect(2);
    assert.notEqual(formatted, 'undefined');
    assert.equal(formatted.length > 1, true);
});

QUnit.test('Test format character I (daylight saving time)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('I', timestampObject), summerTime);
});

QUnit.test('Test format character O (difference to GMT, +0000)', function(assert) {
    var formatter = new DateFormatter();
    var formatted = formatter.format('O', timestampObject);
    assert.notEqual(formatted, 'undefined');
    assert.equal(formatted.length, 5);
});

QUnit.test('Test format character P (difference to GMT, +00:00)', function(assert) {
    var formatter = new DateFormatter();
    var formatted = formatter.format('P', timestampObject);
    assert.expect(2);
    assert.notEqual(formatted, 'undefined');
    assert.equal(formatted.length, 6);
});

QUnit.test('Test format character T (abbreviation of the timezone)', function(assert) {
    var formatter = new DateFormatter();
    var formatted = formatter.format('T', timestampObject);
    assert.expect(2);
    assert.notEqual(formatted, 'undefined');
    assert.equal(formatted.length > 1, true);
});

QUnit.test('Test format character Z (timezone offset)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('Z', timestampObject), new Date(timestampObject).getTimezoneOffset());
});

QUnit.test('Test format character c (ISO 8601 representation of the date)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('c', timestampObject).indexOf(timestampObject.getFullYear()), 0);
});

QUnit.test('Test format character r (RFC 2822 representation of the date)', function(assert) {
    var formatter = new DateFormatter();
    formatter.setLocaleSettings(locales);
    assert.equal(formatter.format('r', timestampObject).indexOf(monthShortString) > 0, true);
});

QUnit.test('Test format character U (unix time)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('U', timestampObject), Math.floor(timestamp / 1000));
});

QUnit.test('Test custom date format with given timestamp', function(assert) {
    var formatter = new DateFormatter();
    formatter.setLocaleSettings(locales);
    assert.equal(formatter.format('D j. M Y, H:i', timestampObject), dayShortString + ' ' + timestampObject.getDate() + '. ' + monthShortString + ' ' + timestampObject.getFullYear() + ', ' + (timestampObject.getHours() < 10 ? '0' + timestampObject.getHours() : timestampObject.getHours()) + ':' + (timestampObject.getMinutes() < 10 ? '0' + timestampObject.getMinutes() : timestampObject.getMinutes()));
});

QUnit.test('Test custom date format with given timestamp without locales', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.format('D j. M Y, H:i', timestampObject), ' ' + timestampObject.getDate() + '.  ' + timestampObject.getFullYear() + ', ' + (timestampObject.getHours() < 10 ? '0' + timestampObject.getHours() : timestampObject.getHours()) + ':' + (timestampObject.getMinutes() < 10 ? '0' + timestampObject.getMinutes() : timestampObject.getMinutes()));
});

QUnit.test('Test another custom date format with another given timestamp', function(assert) {
    var formatter = new DateFormatter();
    formatter.setLocaleSettings(locales);
    var testDate = new Date(2015, 2, 23, 16, 45, 22, 672);
    assert.equal(formatter.format('j.n.Y G:i (l A)', testDate), testDate.getDate() + '.' + (testDate.getMonth() + 1) + '.' + testDate.getFullYear() + ' ' + testDate.getHours() + ':' + (testDate.getMinutes() < 10 ? '0' + testDate.getMinutes() : testDate.getMinutes()) + ' (' + locales.days[testDate.getDay() - 1 < 0 ? 6 : testDate.getDay() - 1] + ' ' + ((testDate.getHours() < 12 || (testDate.getHours() === 12 && testDate.getMinutes() === 0 && testDate.getSeconds() === 0)) ? 'AM' : 'PM') + ')');
});

QUnit.test('Test custom date format with current time', function(assert) {
    var formatter = new DateFormatter();
    var testtime = new Date();
    assert.equal(formatter.format('D j. M Y, H:i').indexOf(testtime.getFullYear()) > 0, true);
});

QUnit.test('Test function parseFormat with invalid data', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.parseFormat('Test', timestampObject), 'Test');
});

QUnit.test('Test function getDaysFromMonth with valid data', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.getDaysFromMonth(1), 31);
});

QUnit.test('Test function getDaysFromMonth with valid leap year data', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.getDaysFromMonth(2, true), 29);
});

QUnit.test('Test function getDaysFromMonth with invalid data', function(assert) {
    var formatter = new DateFormatter();
    assert.throws(function() {
        formatter.getDaysFromMonth('getDaysFromMonth')
    }, TypeError);
});

QUnit.test('Test function getDaysFromMonth with not number non leap year data', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.getDaysFromMonth('2', false), 28);
});

QUnit.test('Test function getWeek with first of the year 2016 (must be week 53)', function(assert) {
    var formatter = new DateFormatter();
    assert.equal(formatter.getWeek(new Date(2016, 0, 1)), 53);
});

QUnit.test('Test function getWeek with a hole week and the day before and after', function(assert) {
    var formatter = new DateFormatter();
    assert.expect(9);
    assert.equal(formatter.getWeek(new Date(2015, 11, 20)), 51);
    assert.equal(formatter.getWeek(new Date(2015, 11, 21)), 52);
    assert.equal(formatter.getWeek(new Date(2015, 11, 22)), 52);
    assert.equal(formatter.getWeek(new Date(2015, 11, 23)), 52);
    assert.equal(formatter.getWeek(new Date(2015, 11, 24)), 52);
    assert.equal(formatter.getWeek(new Date(2015, 11, 25)), 52);
    assert.equal(formatter.getWeek(new Date(2015, 11, 26)), 52);
    assert.equal(formatter.getWeek(new Date(2015, 11, 27)), 52);
    assert.equal(formatter.getWeek(new Date(2015, 11, 28)), 53);
});

QUnit.test('Test function getYearISO', function(assert) {
    var formatter = new DateFormatter();
    assert.expect(10);
    assert.equal(formatter.getYearISO(new Date(2016, 0, 1)), 2015);
    assert.equal(formatter.getYearISO(new Date(2016, 0, 8)), 2016);
    assert.equal(formatter.getYearISO(new Date(2016, 11, 31)), 2016);
    assert.equal(formatter.getYearISO(new Date(2017, 0, 1)), 2017);
    assert.equal(formatter.getYearISO(new Date(2018, 0, 22)), 2018);
    assert.equal(formatter.getYearISO(new Date(2019, 0, 29)), 2019);
    assert.equal(formatter.getYearISO(new Date(2020, 0, 15)), 2020);
    assert.equal(formatter.getYearISO(new Date(2021, 11, 24)), 2021);
    assert.equal(formatter.getYearISO(new Date(2022, 11, 10)), 2022);
    assert.equal(formatter.getYearISO(new Date(2023, 11, 17)), 2023);
});

QUnit.test('Test DateFormatter without TimezoneManager', function(assert) {
    var formatter = new DateFormatter();
    formatter.setUseTimezoneManager(false);
    assert.deepEqual(formatter.getTimezone().indexOf('UTC'), 0);
});

QUnit.test('Test function getTimezoneShort', function(assert) {
    var formatter = new DateFormatter();
    assert.notDeepEqual(formatter.getTimezoneShort(new Date(2016, 0, 1)).length, 0);
});

QUnit.test('Test function isDaylightSavingTime', function(assert) {
    var formatter = new DateFormatter();
    formatter.setUseTimezoneManager(false);
    assert.deepEqual(formatter.isDaylightSavingTime(new Date(2016, 0, 1)), 0);
    assert.deepEqual(formatter.isDaylightSavingTime(new Date(2016, 7, 1)), 1);
});

QUnit.test('Test function getTimezone of the TimezoneManager class', function(assert) {
    var timezone = new TimezoneManager();
    assert.expect(4);
    assert.deepEqual(timezone.getTimezone(48.2, 16.18).name, 'Europe/Vienna');
    assert.deepEqual(timezone.getTimezone(48.2, 16.9).name, 'Europe/Bratislava');
    assert.deepEqual(timezone.getTimezone(-1, -2).name.indexOf('UTC'), 0);
    timezone.setWorkingSpeedModifier(50);
    assert.deepEqual(timezone.getTimezone(48.2, 16.65).name, 'Europe/Bratislava');
});

QUnit.test('Test function getCurrentTimezone of the TimezoneManager class', function(assert) {
    var timezone = new TimezoneManager();
    timezone.getCurrentPosition();
    assert.deepEqual(timezone.getCurrentTimezone().name.indexOf('UTC'), 0);

});

QUnit.test('Test function getTimezoneByName of the TimezoneManager class', function(assert) {
    var timezone = new TimezoneManager();
    assert.expect(2);
    assert.deepEqual(timezone.getTimezoneByName('Europe/Berlin').name, 'Europe/Berlin');
    assert.deepEqual(timezone.getTimezoneByName('Here').name.substr(0, 3), 'UTC');
});

QUnit.test('Test function isDaylightSavingTime of the TimezoneManager class', function(assert) {
    var timezone = new TimezoneManager();
    assert.deepEqual(timezone.isDaylightSavingTime(timestamp, timezone.getTimezone(48.2, 16.18)), true);
});

if (typeof module !== 'undefined' && module.exports) {
    QUnit.load();
}