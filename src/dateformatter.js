if (typeof module !== 'undefined' && module.exports) {
    module.exports = DateFormatter;
    var TimezoneManager = require('./src/timezonemanager.js');
}

function DateFormatter() {
    var _localeSettings = null;
    var _currentDate = null;
    var _timezoneManager = null;

    function getDefaultTimezone() {
        var offset = new Date().getTimezoneOffset();
        var negative = false;
        if (offset < 0) {
            negative = true;
            offset *= -1;
        }
        var hours = offset / 60;
        var minutes = offset % 60;
        return {
            name: 'UTC' + (negative ? '+' : '-') + hours + (minutes > 0 ? ':' + minutes : ''),
            zone: 'UTC',
            zoneDST: 'UTC'
        };
    }

    DateFormatter.prototype.setUseTimezoneManager = function(use, callback) {
        _timezoneManager = null;
        if (use === true) {
            try {
                _timezoneManager = new TimezoneManager();
                _timezoneManager.getCurrentPosition(callback);
            } catch (RefereneError) {
            }
        }
    };

    DateFormatter.prototype.setLocaleSettings = function(localeSettings) {
        if (typeof localeSettings === 'object') {
            _localeSettings = localeSettings;
        } else if (typeof localeSettings === 'string') {
            _localeSettings = JSON.parse(localeSettings);
        } else {
            _localeSettings = null;
            throw new TypeError("The data type of the given settings variable is not a valid type");
        }
    };

    DateFormatter.prototype.getLocaleSettings = function() {
        return _localeSettings;
    };

    DateFormatter.prototype.getLocaleString = function() {
        if (_localeSettings === null) {
            return null;
        }
        return JSON.stringify(_localeSettings);
    };

    DateFormatter.prototype.getSetting = function(category, setting) {
        if (_localeSettings === null || _localeSettings[category] === undefined || _localeSettings[category][setting] === undefined) {
            return '';
        }
        return _localeSettings[category][setting];
    };

    DateFormatter.prototype.convertToDate = function(timestamp) {
        if (typeof timestamp === 'number') {
            return new Date(timestamp);
        } else if (timestamp === undefined) {
            return new Date();
        }
        return timestamp;
    };

    DateFormatter.prototype.setDate = function(timestamp) {
        _currentDate = this.convertToDate(timestamp);
    };

    DateFormatter.prototype.getDate = function(timestamp) {
        if (timestamp !== undefined) {
            this.setDate(timestamp);
        }
        return _currentDate;
    };

    DateFormatter.prototype.getDay = function(timestamp) {
        this.getDate(timestamp);
        return this.getDayShort() < 10 ? '0' + this.getDayShort() : this.getDayShort();
    };

    DateFormatter.prototype.getDayShort = function(timestamp) {
        timestamp = this.getDate(timestamp);
        return timestamp.getDate();
    };

    DateFormatter.prototype.getDayNumeric = function(timestamp) {
        timestamp = this.getDate(timestamp);
        return timestamp.getDay();
    };

    DateFormatter.prototype.getDayISO = function(timestamp) {
        this.getDate(timestamp);
        if (this.getDayNumeric() > 0) {
            return this.getDayNumeric();
        }
        return 7;
    };

    DateFormatter.prototype.getDayOfYear = function(timestamp) {
        this.getDate(timestamp);
        var month = this.getMonthShort();
        var leapYear = this.isLeapYear();
        var days = 0;
        for (var i = 1; i < month; i++) {
            days += this.getDaysFromMonth(i, leapYear);
        }
        return days + this.getDayShort();
    };

    DateFormatter.prototype.getDayName = function(timestamp) {
        this.getDate(timestamp);
        return this.getSetting('days', this.getDayISO() - 1);
    };

    DateFormatter.prototype.getDayNameShort = function(timestamp) {
        this.getDate(timestamp);
        return this.getSetting('daysShort', this.getDayISO() - 1);
    };

    DateFormatter.prototype.getDayAppendix = function(timestamp) {
        this.getDate(timestamp);
        return this.getSetting('dayAppendix', this.getDay() - 1);
    };

    DateFormatter.prototype.getWeek = function(timestamp) {
        timestamp = this.getDate(timestamp);
        var week = Math.ceil((this.getDayOfYear() + this.getYearISOOffset()) / 7);
        if (week <= 0) {
            week = this.getWeeks(new Date(this.getYear() - 1, 0, 1));
            this.setDate(timestamp);
        }
        return week;
    };

    DateFormatter.prototype.getWeeks = function(timestamp) {
        this.getDate(timestamp);
        var days = this.getYearISOOffset();
        var leapYear = this.isLeapYear();
        for (var i = 1; i <= 12; i++) {
            days += this.getDaysFromMonth(i, leapYear);
        }
        return Math.ceil(days / 7);
    };

    DateFormatter.prototype.getMonth = function(timestamp) {
        this.getDate(timestamp);
        return (this.getMonthShort() < 10 ? '0' : '') + this.getMonthShort();
    };

    DateFormatter.prototype.getMonthShort = function(timestamp) {
        timestamp = this.getDate(timestamp);
        return timestamp.getMonth() + 1;
    };

    DateFormatter.prototype.getDaysFromMonth = function(month, leapYear) {
        if (typeof month !== 'number') {
            if (isNaN(month)) {
                throw new TypeError('The given month has to be a number');
            }
            month = parseInt(month);
        }
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31;
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;
            case 2:
                if (leapYear == true) {
                    return 29;
                }
                return 28;
        }
    };

    DateFormatter.prototype.getDaysOfMonth = function(timestamp) {
        this.getDate(timestamp);
        return this.getDaysFromMonth(this.getMonthShort(), this.isLeapYear());
    };

    DateFormatter.prototype.getMonthName = function(timestamp) {
        this.getDate(timestamp);
        return this.getSetting('months', this.getMonthShort() - 1);
    };

    DateFormatter.prototype.getMonthNameShort = function(timestamp) {
        this.getDate(timestamp);
        return this.getSetting('monthsShort', this.getMonthShort() - 1);
    };

    DateFormatter.prototype.isLeapYear = function(timestamp) {
        this.getDate(timestamp);
        var year = this.getYear();
        return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) ? '1' : '0';
    };

    DateFormatter.prototype.getYear = function(timestamp) {
        timestamp = this.getDate(timestamp);
        return timestamp.getFullYear();
    };

    DateFormatter.prototype.getYearShort = function(timestamp) {
        this.getDate(timestamp);
        return this.getYear().toString().substr(2);
    };

    DateFormatter.prototype.getYearISO = function(timestamp) {
        this.getDate(timestamp);
        if ((this.getMonthShort() === 1 && this.getWeek() === 53) || (this.getMonthShort() === 12 && this.getWeek() === 1)) {
            return this.getYear() - 1;
        }
        return this.getYear();
    };

    DateFormatter.prototype.getYearISOOffset = function(timestamp) {
        this.getDate(timestamp);
        switch (new Date(this.getYear(), 0, 1).getDay()) {
            case 0:
                return -1;
            case 1:
                return 0;
            case 2:
                return 1;
            case 3:
                return 2;
            case 4:
                return 3;
            case 5:
                return -3;
            case 6:
                return -2;
        }
    };

    DateFormatter.prototype.getHours12 = function(timestamp) {
        this.getDate(timestamp);
        return (this.getHours12Short() < 10 ? '0' : '') + this.getHours12Short();
    };

    DateFormatter.prototype.getHours24 = function(timestamp) {
        this.getDate(timestamp);
        return (this.getHours24Short() < 10 ? '0' : '') + this.getHours24Short();
    };

    DateFormatter.prototype.getHours12Short = function(timestamp) {
        this.getDate(timestamp);
        return this.getHours24Short() - (this.getHours24Short() > 12 ? 12 : 0);
    };

    DateFormatter.prototype.getHours24Short = function(timestamp) {
        timestamp = this.getDate(timestamp);
        return timestamp.getHours();
    };

    DateFormatter.prototype.getMinutes = function(timestamp) {
        this.getDate(timestamp);
        return (this.getMinutesShort() < 10 ? '0' : '') + this.getMinutesShort();
    };

    DateFormatter.prototype.getMinutesShort = function(timestamp) {
        timestamp = this.getDate(timestamp);
        return timestamp.getMinutes();
    };

    DateFormatter.prototype.getSeconds = function(timestamp) {
        this.getDate(timestamp);
        return (this.getSecondsShort() < 10 ? '0' : '') + this.getSecondsShort();
    };

    DateFormatter.prototype.getSecondsShort = function(timestamp) {
        timestamp = this.getDate(timestamp);
        return timestamp.getSeconds();
    };

    DateFormatter.prototype.getMicroseconds = function(timestamp) {
        timestamp = this.getDate(timestamp);
        return timestamp.getMilliseconds() * 1000;
    };

    DateFormatter.prototype.getAmPm = function(timestamp) {
        this.getDate(timestamp);
        if (this.getHours24Short() < 12 || (this.getHours24Short() === 12 && this.getMinutesShort() === 0 && this.getSecondsShort() === 0)) {
            return this.getSetting('ampm', 0);
        }
        return this.getSetting('ampm', 1);
    };

    DateFormatter.prototype.getAMPM = function(timestamp) {
        this.getDate(timestamp);
        return this.getAmPm().toString().toUpperCase();
    };

    DateFormatter.prototype.getSwatchInternetTime = function(timestamp) {
        this.getDate(timestamp);
        return Math.round((((this.getHours24Short() * 60) + this.getMinutesShort() * 60) + this.getSecondsShort()) / 86.4);
    };

    DateFormatter.prototype.isDaylightSavingTime = function(timestamp) {
        timestamp = this.getDate(timestamp);
        if (_timezoneManager === null) {
            if (this.getTimezoneOffset() !== new Date(this.getYear(), 0, 1).getTimezoneOffset()) {
                return 1;
            }
            return 0;
        }
        return _timezoneManager.isDaylightSavingTime(timestamp, _timezoneManager.getCurrentTimezone()) === true ? 1 : 0;
    };

    DateFormatter.prototype.getTimezoneObject = function() {
        if (_timezoneManager === null) {
            return getDefaultTimezone();
        }
        return _timezoneManager.getCurrentTimezone();
    };

    DateFormatter.prototype.getTimezone = function(timestamp) {
        this.getDate(timestamp);
        return this.getTimezoneObject().name;
    };

    DateFormatter.prototype.getTimezoneShort = function(timestamp) {
        this.getDate(timestamp);
        var timezoneObject = this.getTimezoneObject();
        if (this.isDaylightSavingTime()) {
            return timezoneObject.zoneDST;
        }
        return timezoneObject.zone;
    };

    DateFormatter.prototype.getGMT = function(timestamp) {
        this.getDate(timestamp);
        var offset = this.getTimezoneOffset();
        var negative = false;
        if (offset < 0) {
            negative = true;
            offset *= -1;
        }
        var hours = offset / 60;
        var minutes = offset % 60;
        return (negative ? '+' : '-') + (hours < 10 ? '0' : '') + hours + (minutes < 10 ? '0' : minutes) + minutes;
    };

    DateFormatter.prototype.getGMTSeparated = function(timestamp) {
        this.getDate(timestamp);
        var GMT = this.getGMT().toString();
        return GMT.substr(0, 3) + ':' + GMT.substr(3);
    };

    DateFormatter.prototype.getTimezoneOffset = function(timestamp) {
        timestamp = this.getDate(timestamp);
        return timestamp.getTimezoneOffset();
    };

    DateFormatter.prototype.getDateISO = function(timestamp) {
        this.getDate(timestamp);
        return this.format('Y-m-d\\TH:i:sP');
    };

    DateFormatter.prototype.getDateRFC = function(timestamp) {
        this.getDate(timestamp);
        return this.format('D, d M Y H:i:s O');
    };

    DateFormatter.prototype.getUnixTimestamp = function(timestamp) {
        timestamp = this.getDate(timestamp);
        return Math.floor(timestamp.getTime() / 1000);
    };

    DateFormatter.prototype.parseFormat = function(formatCharacter, timestamp) {
        if (timestamp !== undefined) {
            this.setDate(timestamp);
        }
        if (typeof formatCharacter !== 'string' || formatCharacter.length > 1) {
            return formatCharacter;
        }
        switch (formatCharacter) {
            case 'd':
                return this.getDay();
            case 'D':
                return this.getDayNameShort();
            case 'j':
                return this.getDayShort();
            case 'l':
                return this.getDayName();
            case 'N':
                return this.getDayISO();
            case 'S':
                return this.getDayAppendix();
            case 'w':
                return this.getDayNumeric();
            case 'z':
                return this.getDayOfYear();
            case 'W':
                return this.getWeek();
            case 'F':
                return this.getMonthName();
            case 'm':
                return this.getMonth();
            case 'M':
                return this.getMonthNameShort();
            case 'n':
                return this.getMonthShort();
            case 't':
                return this.getDaysOfMonth();
            case 'L':
                return this.isLeapYear();
            case 'o':
                return this.getYearISO();
            case 'Y':
                return this.getYear();
            case 'y':
                return this.getYearShort();
            case 'a':
                return this.getAmPm();
            case 'A':
                return this.getAMPM();
            case 'B':
                return this.getSwatchInternetTime();
            case 'g':
                return this.getHours12Short();
            case 'G':
                return this.getHours24Short();
            case 'h':
                return this.getHours12();
            case 'H':
                return this.getHours24();
            case 'i':
                return this.getMinutes();
            case 's':
                return this.getSeconds();
            case 'u':
                return this.getMicroseconds();
            case 'e':
                return this.getTimezone();
            case 'I':
                return this.isDaylightSavingTime();
            case 'O':
                return this.getGMT();
            case 'P':
                return this.getGMTSeparated();
            case 'T':
                return this.getTimezoneShort();
            case 'Z':
                return this.getTimezoneOffset();
            case 'c':
                return this.getDateISO();
            case 'r':
                return this.getDateRFC();
            case 'U':
                return this.getUnixTimestamp();
            default:
                return formatCharacter;
        }
    }

    DateFormatter.prototype.format = function(format, timestamp) {
        this.setDate(timestamp);
        var formatted = '';
        for (var i = 0; i < format.length; i++) {
            if (format[i] === '\\') {
                formatted += format[++i];
            } else {
                formatted += this.parseFormat(format[i]);
            }
        }
        return formatted;
    };

    this.setUseTimezoneManager(true);
}