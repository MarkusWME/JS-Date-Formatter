if (typeof module !== 'undefined' && module.exports) {
    module.exports = TimezoneManager;
}

function TimezoneManager() {
    var _timezones = [
        {
            name: 'Europe/Amsterdam',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +52.22,
            longitude: +4.54,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Andorra',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +42.3,
            longitude: +1.31,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Astrakhan',
            zone: 'MSK+1',
            zoneDST: 'MSK+1',
            latitude: +46.21,
            longitude: +48.03,
            baseUTCOffset: +3,
            DSTDirection: +0
        }, {
            name: 'Europe/Athens',
            zone: 'EET',
            zoneDST: 'EEST',
            latitude: +37.58,
            longitude: +23.43,
            baseUTCOffset: +2,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Belgrade',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +44.5,
            longitude: +20.3,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Berlin',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +52.3,
            longitude: +13.22,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Bratislava',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +48.09,
            longitude: +17.07,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Brussels',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +50.5,
            longitude: +4.2,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Bucharest',
            zone: 'EET',
            zoneDST: 'EEST',
            latitude: +44.26,
            longitude: +26.06,
            baseUTCOffset: +2,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Budapest',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +47.3,
            longitude: +19.05,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Busingen',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +35.1,
            longitude: +33.22,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Chisinau',
            zone: 'EET',
            zoneDST: 'EEST',
            latitude: +47.0,
            longitude: +28.5,
            baseUTCOffset: +2,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Copenhagen',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +55.4,
            longitude: +12.35,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Dublin',
            zone: 'IST',
            zoneDST: 'GMT',
            latitude: +53.2,
            longitude: -6.15,
            baseUTCOffset: +0,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Gibraltar',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +36.08,
            longitude: -5.21,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Guernsey',
            zone: 'GMT',
            zoneDST: 'BST',
            latitude: +49.27,
            longitude: -2.32,
            baseUTCOffset: +0,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Helsinki',
            zone: 'EET',
            zoneDST: 'EEST',
            latitude: +60.10,
            longitude: +24.58,
            baseUTCOffset: +2,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Isle_of_Man',
            zone: 'BST',
            zoneDST: 'GMT',
            latitude: +54.09,
            longitude: -4.28,
            baseUTCOffset: +0,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Istanbul',
            zone: 'EET',
            zoneDST: 'EEST',
            latitude: +41.01,
            longitude: +28.58,
            baseUTCOffset: +2,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Jersey',
            zone: 'BST',
            zoneDST: 'GMT',
            latitude: +49.12,
            longitude: -2.07,
            baseUTCOffset: +0,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Kaliningrad',
            zone: 'EET',
            zoneDST: 'EST',
            latitude: +54.43,
            longitude: +20.3,
            baseUTCOffset: +2,
            DSTDirection: +0
        }, {
            name: 'Europe/Kiev',
            zone: 'EET',
            zoneDST: 'EEST',
            latitude: +50.26,
            longitude: +30.31,
            baseUTCOffset: +2,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Kirov',
            zone: 'MSK',
            zoneDST: 'MSK',
            latitude: +58.36,
            longitude: +49.39,
            baseUTCOffset: +3,
            DSTDirection: +0
        }, {
            name: 'Europe/Lisbon',
            zone: 'WET',
            zoneDST: 'WEST',
            latitude: +38.43,
            longitude: -9.08,
            baseUTCOffset: +0,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Ljubljana',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +46.03,
            longitude: +14.31,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/London',
            zone: 'GMT',
            zoneDST: 'BST',
            latitude: +51.303,
            longitude: -7.31,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Luxembourg',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +49.36,
            longitude: +6.09,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Madrid',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +40.24,
            longitude: -3.41,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Malta',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +35.54,
            longitude: +14.31,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Mariehamn',
            zone: 'EET',
            zoneDST: 'EEST',
            latitude: +60.06,
            longitude: +19.57,
            baseUTCOffset: +2,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Minsk',
            zone: 'MSK',
            zoneDST: 'MSK',
            latitude: +53.54,
            longitude: +27.34,
            baseUTCOffset: +3,
            DSTDirection: +0
        }, {
            name: 'Europe/Monaco',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +43.42,
            longitude: +7.23,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Moscow',
            zone: 'MSK',
            zoneDST: 'MSK',
            latitude: +55.4521,
            longitude: +37.3704,
            baseUTCOffset: +3,
            DSTDirection: +0
        }, {
            name: 'Europe/Oslo',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +59.55,
            longitude: +10.45,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Paris',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +48.52,
            longitude: +2.2,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Podgorica',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +42.26,
            longitude: +19.16,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Prague',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +50.05,
            longitude: +14.26,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Riga',
            zone: 'EET',
            zoneDST: 'EEST',
            latitude: +56.57,
            longitude: +24.06,
            baseUTCOffset: +2,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Rome',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +41.54,
            longitude: +12.29,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Samara',
            zone: 'SAMT',
            zoneDST: 'SAMT',
            latitude: +53.12,
            longitude: +50.09,
            baseUTCOffset: +4,
            DSTDirection: +0
        }, {
            name: 'Europe/San_Marino',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +43.55,
            longitude: +12.28,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Sarajevo',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +43.52,
            longitude: +18.25,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Simferopol',
            zone: 'MSK',
            zoneDST: 'MSK',
            latitude: +44.27,
            longitude: +34.06,
            baseUTCOffset: +3,
            DSTDirection: +0
        }, {
            name: 'Europe/Skopje',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +41.59,
            longitude: +21.26,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Sofia',
            zone: 'EET',
            zoneDST: 'EEST',
            latitude: +42.41,
            longitude: +23.19,
            baseUTCOffset: +2,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Stockholm',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +59.2,
            longitude: +18.03,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Tallinn',
            zone: 'EET',
            zoneDST: 'EEST',
            latitude: +59.25,
            longitude: +24.45,
            baseUTCOffset: +2,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Tirane',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +41.2,
            longitude: +19.5,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Ulyanovsk',
            zone: 'MSK+1',
            zoneDST: 'MSK+1',
            latitude: +54.2,
            longitude: +48.24,
            baseUTCOffset: +3,
            DSTDirection: +0
        }, {
            name: 'Europe/Uzhgorod',
            zone: 'EET',
            zoneDST: 'EEST',
            latitude: +48.37,
            longitude: +22.18,
            baseUTCOffset: +2,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Vaduz',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +47.09,
            longitude: +9.31,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Vatican',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +41.5408,
            longitude: +12.2711,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Vienna',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +48.13,
            longitude: +16.2,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Vilnius',
            zone: 'EET',
            zoneDST: 'EEST',
            latitude: +54.41,
            longitude: +25.19,
            baseUTCOffset: +2,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Volgograd',
            zone: 'MSK',
            zoneDST: 'MSK',
            latitude: +48.44,
            longitude: +44.25,
            baseUTCOffset: +3,
            DSTDirection: +0
        }, {
            name: 'Europe/Warsaw',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +52.15,
            longitude: +21.0,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Zagreb',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +45.48,
            longitude: +15.58,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Zaporozhye',
            zone: 'EET',
            zoneDST: 'EEST',
            latitude: +47.5,
            longitude: +35.1,
            baseUTCOffset: +2,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Europe/Zurich',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +47.23,
            longitude: +8.32,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }
    ];

    var _startTolerance = 0.8;
    var _toleranceStep = 0.02;
    var _speedMultiplier = 1;

    var _geoposition = null;

    function getESTStart(year) {
        return new Date(Date.UTC(year, 2, (31 - ((((5 * year) / 4) + 4) % 7)), 1, 0, 0, 0));
    }

    function getESTEnd(year) {
        return new Date(Date.UTC(year, 9, (31 - ((((5 * year) / 4) + 1) % 7)), 1, 0, 0, 0));
    }

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

    TimezoneManager.prototype.setWorkingSpeedModifier = function(value) {
        if (typeof value === 'number') {
            _speedMultiplier = value;
        }
    };

    TimezoneManager.prototype.getTimezone = function(latitude, longitude) {
        var workingTimezones = [];
        var possibleTimezones = [];
        var tolerance = _startTolerance;
        for (var i = 0; i < _timezones.length; i++) {
            if (Math.abs(_timezones[i].latitude - latitude) <= tolerance && Math.abs(_timezones[i].longitude - longitude) <= tolerance) {
                possibleTimezones.push(i);
            }
        }
        while (possibleTimezones.length > 1) {
            tolerance -= _toleranceStep * _speedMultiplier;
            if (tolerance < 0) {
                break;
            }
            workingTimezones = possibleTimezones.slice(0);
            possibleTimezones = [];
            for (var j = 0; j < workingTimezones.length; j++) {
                if (Math.abs(_timezones[workingTimezones[j]].latitude - latitude) <= tolerance && Math.abs(_timezones[workingTimezones[j]].longitude - longitude) <= tolerance) {
                    possibleTimezones.push(workingTimezones[j]);
                }
            }
        }
        if (possibleTimezones.length >= 1) {
            return _timezones[possibleTimezones[0]];
        } else {
            return getDefaultTimezone();
        }
    };

    TimezoneManager.prototype.getCurrentPosition = function(callback) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                _geoposition = position;
                if (typeof callback === 'function') {
                    callback(position);
                }
            });
        }
    };

    TimezoneManager.prototype.getCurrentTimezone = function() {
        if (_geoposition === null) {
            return getDefaultTimezone();
        }
        return this.getTimezone(_geoposition.coords.latitude, _geoposition.coords.longitude);
    };

    TimezoneManager.prototype.getTimezoneByName = function(name) {
        for (var i = 0; i < _timezones.length; i++) {
            if (_timezones[i].name === name) {
                return _timezones[i];
            }
        }
        return getDefaultTimezone();
    };

    TimezoneManager.prototype.isDaylightSavingTime = function(timestamp, timezone) {
        if (typeof timestamp === 'number') {
            timestamp = new Date(timestamp);
        }
        if (typeof timestamp === 'object' && typeof timezone === 'object') {
            if (timezone.getDSTStart !== undefined && timezone.getDSTEnd !== undefined) {
                return timestamp >= timezone.getDSTStart(timestamp.getFullYear()) && timestamp <= timezone.getDSTEnd(timestamp.getFullYear()) - timezone.DSTDirection;
            } else if (timezone.DSTDirection === 0) {
                return false;
            } else {
                if (timestamp.getTimezoneOffset() !== new Date(timestamp.getFullYear(), 0, 1).getTimezoneOffset()) {
                    return true;
                }
            }
        }
        return false;
    };
}