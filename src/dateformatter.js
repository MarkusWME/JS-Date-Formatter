if (typeof module !== 'undefined' && module.exports) {
    module.exports = DateFormatter;
}

function DateFormatter() {
    self.localeSettings = null;
    self.currentDate = null;

    DateFormatter.prototype.setLocaleSettings = function(localeSettings) {
        if (typeof localeSettings === 'object') {
            self.localeSettings = localeSettings;
        } else if (typeof localeSettings === 'string') {
            self.localeSettings = JSON.parse(localeSettings);
        } else {
            self.localeSettings = null;
            throw new TypeError("The data type of the given settings variable is not a valid type");
        }
    };

    DateFormatter.prototype.getLocaleSettings = function() {
        return self.localeSettings;
    };

    DateFormatter.prototype.getLocaleString = function() {
        if (self.localeSettings === null) {
            return null;
        }
        return JSON.stringify(self.localeSettings);
    };

    DateFormatter.prototype.getSetting = function(category, setting) {
        if (self.localeSettings === null || self.localeSettings[category] === undefined || self.localeSettings[category][setting] === undefined) {
            return '';
        }
        return self.localeSettings[category][setting];
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
        self.currentDate = this.convertToDate(timestamp);
    };

    DateFormatter.prototype.getDate = function(timestamp) {
        if (timestamp !== undefined) {
            this.setDate(timestamp);
        }
        return self.currentDate;
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
        /// TODO: implement
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
        return this.getSetting('dayAppendix', this.getDay());
    };

    DateFormatter.prototype.getWeek = function(timestamp) {
        this.getDate(timestamp);
        /// TODO: implement
    };

    DateFormatter.prototype.getMonth = function(timestamp) {
        this.getDate(timestamp);
        return (this.getMonthShort() < 10 ? '0' : '') + this.getMonthShort();
    };

    DateFormatter.prototype.getMonthShort = function(timestamp) {
        timestamp = this.getDate(timestamp);
        return timestamp.getMonth();
    };

    DateFormatter.prototype.getDaysOfMonth = function(timestamp) {
        this.getDate(timestamp);
        /// TODO: implement
    };

    DateFormatter.prototype.getMonthName = function(timestamp) {
        this.getDate(timestamp);
        /// TODO: implement
    };

    DateFormatter.prototype.getMonthNameShort = function(timestamp) {
        this.getDate(timestamp);
        /// TODO: implement
    };

    DateFormatter.prototype.isLeapYear = function(timestamp) {
        this.getDate(timestamp);
        /// TODO: implement
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
        /// TODO: implement
    };

    DateFormatter.prototype.getHours12 = function(timestamp) {
        this.getDate(timestamp);
        /// TODO: implement
    };

    DateFormatter.prototype.getHours24 = function(timestamp) {
        this.getDate(timestamp);
        return (this.getHours24Short() < 10 ? '0' : '') + this.getHours24Short();
    };

    DateFormatter.prototype.getHours12Short = function(timestamp) {
        this.getDate(timestamp);
        /// TODO: implement
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
        /// TODO: implement
    };

    DateFormatter.prototype.isDaylightSavingTime = function(timestamp) {
        this.getDate(timestamp);
        /// TODO: implement
    };

    DateFormatter.prototype.getTimezone = function(timestamp) {
        this.getDate(timestamp);
        /// TODO: implement
    };

    DateFormatter.prototype.getTimezoneShort = function(timestamp) {
        this.getDate(timestamp);
        /// TODO: implement
    };

    DateFormatter.prototype.getGMT = function(timestamp) {
        this.getDate(timestamp);
        /// TODO: implement
    };

    DateFormatter.prototype.getGMTSeparated = function(timestamp) {
        this.getDate(timestamp);
        /// TODO: implement
    };

    DateFormatter.prototype.getTimezoneOffset = function(timestamp) {
        timestamp = this.getDate(timestamp);
        return timestamp.getTimezoneOffset();
    };

    DateFormatter.prototype.getDateISO = function(timestamp) {
        this.getDate(timestamp);
        /// TODO: implement
    };

    DateFormatter.prototype.getDateRFC = function(timestamp) {
        this.getDate(timestamp);
        /// TODO: implement
    };

    DateFormatter.prototype.getUnixTimestamp = function(timestamp) {
        this.getDate(timestamp);
        /// TODO: implement
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
            formatted += this.parseFormat(format[i]);
        }
        return formatted;
    };
}