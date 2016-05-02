if (typeof module !== 'undefined' && module.exports) {
    module.exports = TimezoneManager;
}

function TimezoneManager() {
    var _timezones = [
        {
            name: 'Africa/Abidjan',
            zone: 'UTC',
            zoneDST: 'UTC',
            latitude: +5.19,
            longitude: -4.02,
            baseUTCOffset: +0,
            DSTDirection: +0
        }, {
            name: 'Africa/Accra',
            zone: 'UTC',
            zoneDST: 'UTC',
            latitude: +5.33,
            longitude: -0.13,
            baseUTCOffset: +0,
            DSTDirection: +0
        }, {
            name: 'Africa/Addis_Ababa',
            zone: 'EAT',
            zoneDST: 'EAT',
            latitude: +9.02,
            longitude: +38.42,
            baseUTCOffset: +3,
            DSTDirection: +0
        }, {
            name: 'Africa/Algiers',
            zone: 'CET',
            zoneDST: 'CET',
            latitude: +36.47,
            longitude: +3.03,
            baseUTCOffset: +1,
            DSTDirection: +0
        }, {
            name: 'Africa/Asmara',
            zone: 'EAT',
            zoneDST: 'EAT',
            latitude: +15.2,
            longitude: +38.53,
            baseUTCOffset: +3,
            DSTDirection: +0
        }, {
            name: 'Africa/Bamako',
            zone: 'GMT',
            zoneDST: 'GMT',
            latitude: +12.39,
            longitude: -8.0,
            baseUTCOffset: +0,
            DSTDirection: +0
        }, {
            name: 'Africa/Bangui',
            zone: 'WAT',
            zoneDST: 'WAT',
            latitude: +4.22,
            longitude: +18.35,
            baseUTCOffset: +1,
            DSTDirection: +0
        }, {
            name: 'Africa/Banjul',
            zone: 'GMT',
            zoneDST: 'GMT',
            latitude: +13.28,
            longitude: -16.39,
            baseUTCOffset: +0,
            DSTDirection: +0
        }, {
            name: 'Africa/Bissau',
            zone: 'GMT',
            zoneDST: 'GMT',
            latitude: +11.51,
            longitude: -15.35,
            baseUTCOffset: +0,
            DSTDirection: +0
        }, {
            name: 'Africa/Blantyre',
            zone: 'CAT',
            zoneDST: 'CAT',
            latitude: -15.47,
            longitude: +35.0,
            baseUTCOffset: +2,
            DSTDirection: +0
        }, {
            name: 'Africa/Brazzaville',
            zone: 'CAT',
            zoneDST: 'CAT',
            latitude: -4.16,
            longitude: +15.17,
            baseUTCOffset: +2,
            DSTDirection: +0
        }, {
            name: 'Africa/Bujumbura',
            zone: 'CAT',
            zoneDST: 'CAT',
            latitude: -3.23,
            longitude: +29.22,
            baseUTCOffset: +2,
            DSTDirection: +0
        }, {
            name: 'Africa/Cairo',
            zone: 'EET',
            zoneDST: 'EET',
            latitude: +30.03,
            longitude: +31.15,
            baseUTCOffset: +2,
            DSTDirection: +0
        }, {
            name: 'Africa/Casablanca',
            zone: 'WET',
            zoneDST: 'WEST',
            latitude: +33.39,
            longitude: -7.35,
            baseUTCOffset: +0,
            DSTDirection: +1,
            getDSTStart: getRamadanDSTStart,
            getDSTEnd: getRamadanDSTEnd
        }, {
            name: 'Africa/Ceuta',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +35.53,
            longitude: -5.19,
            baseUTCOffset: +2,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
        }, {
            name: 'Africa/Conakry',
            zone: 'GMT',
            zoneDST: 'GMT',
            latitude: +9.31,
            longitude: -13.43,
            baseUTCOffset: +0,
            DSTDirection: +0
        }, {
            name: 'Africa/Dakar',
            zone: 'GMT',
            zoneDST: 'GMT',
            latitude: +14.40,
            longitude: -17.26,
            baseUTCOffset: +0,
            DSTDirection: +0
        }, {
            name: 'Africa/Dar_es_Salaam',
            zone: 'EAT',
            zoneDST: 'EAT',
            latitude: -6.48,
            longitude: +39.17,
            baseUTCOffset: +3,
            DSTDirection: +0
        }, {
            name: 'Africa/Djibouti',
            zone: 'EAT',
            zoneDST: 'EAT',
            latitude: +11.36,
            longitude: +43.09,
            baseUTCOffset: +3,
            DSTDirection: +0
        }, {
            name: 'Africa/Douala',
            zone: 'WAT',
            zoneDST: 'WAT',
            latitude: +4.03,
            longitude: +9.42,
            baseUTCOffset: +1,
            DSTDirection: +0
        }, {
            name: 'Africa/El_Aaiun',
            zone: 'WET',
            zoneDST: 'WEST',
            latitude: +27.09,
            longitude: -13.12,
            baseUTCOffset: +0,
            DSTDirection: +1,
            getDSTStart: getRamadanDSTStart,
            getDSTEnd: getRamadanDSTEnd
        }, {
            name: 'Africa/Freetown',
            zone: 'GMT',
            zoneDST: 'GMT',
            latitude: +8.30,
            longitude: -13.15,
            baseUTCOffset: +0,
            DSTDirection: +0
        }, {
            name: 'Africa/Gaborone',
            zone: 'CAT',
            zoneDST: 'CAT',
            latitude: -24.39,
            longitude: +25.55,
            baseUTCOffset: +2,
            DSTDirection: +0
        }, {
            name: 'Africa/Harare',
            zone: 'CAT',
            zoneDST: 'CAT',
            latitude: -17.50,
            longitude: +31.03,
            baseUTCOffset: +2,
            DSTDirection: +0
        }, {
            name: 'Africa/Johannesburg',
            zone: 'SAST',
            zoneDST: 'SAST',
            latitude: -26.15,
            longitude: +28.0,
            baseUTCOffset: +2,
            DSTDirection: +0
        }, {
            name: 'Africa/Juba',
            zone: 'EAT',
            zoneDST: 'EAT',
            latitude: +4.51,
            longitude: +31.36,
            baseUTCOffset: +3,
            DSTDirection: +0
        }, {
            name: 'Africa/Kampala',
            zone: 'EAT',
            zoneDST: 'EAT',
            latitude: +0.19,
            longitude: +32.25,
            baseUTCOffset: +3,
            DSTDirection: +0
        }, {
            name: 'Africa/Khartoum',
            zone: 'EAT',
            zoneDST: 'EAT',
            latitude: +15.36,
            longitude: +32.32,
            baseUTCOffset: +3,
            DSTDirection: +0
        }, {
            name: 'Africa/Kigali',
            zone: 'CAT',
            zoneDST: 'CAT',
            latitude: -1.57,
            longitude: +30.04,
            baseUTCOffset: +2,
            DSTDirection: +0
        }, {
            name: 'Africa/Kinshasa',
            zone: 'WAT',
            zoneDST: 'WAT',
            latitude: -4.18,
            longitude: +15.18,
            baseUTCOffset: +1,
            DSTDirection: +0
        }, {
            name: 'Africa/Lagos',
            zone: 'WAT',
            zoneDST: 'WAT',
            latitude: +6.27,
            longitude: +3.24,
            baseUTCOffset: +1,
            DSTDirection: +0
        }, {
            name: 'Africa/Libreville',
            zone: 'WAT',
            zoneDST: 'WAT',
            latitude: +0.23,
            longitude: +9.27,
            baseUTCOffset: +1,
            DSTDirection: +0
        }, {
            name: 'Africa/Lome',
            zone: 'GMT',
            zoneDST: 'GMT',
            latitude: +6.08,
            longitude: +1.13,
            baseUTCOffset: +0,
            DSTDirection: +0
        }, {
            name: 'Africa/Luanda',
            zone: 'WAT',
            zoneDST: 'WAT',
            latitude: -8.48,
            longitude: +13.14,
            baseUTCOffset: +1,
            DSTDirection: +0
        }, {
            name: 'Africa/Lubumbashi',
            zone: 'CAT',
            zoneDST: 'CAT',
            latitude: -11.4,
            longitude: +27.28,
            baseUTCOffset: +2,
            DSTDirection: +0
        }, {
            name: 'Africa/Lusaka',
            zone: 'CAT',
            zoneDST: 'CAT',
            latitude: -15.25,
            longitude: +28.17,
            baseUTCOffset: +2,
            DSTDirection: +0
        }, {
            name: 'Africa/Malabo',
            zone: 'WAT',
            zoneDST: 'WAT',
            latitude: +3.45,
            longitude: +8.47,
            baseUTCOffset: +1,
            DSTDirection: +0
        }, {
            name: 'Africa/Maputo',
            zone: 'CAT',
            zoneDST: 'CAT',
            latitude: -25.58,
            longitude: +32.35,
            baseUTCOffset: +2,
            DSTDirection: +0
        }, {
            name: 'Africa/Maseru',
            zone: 'SAST',
            zoneDST: 'SAST',
            latitude: -29.28,
            longitude: +27.3,
            baseUTCOffset: +2,
            DSTDirection: +0
        }, {
            name: 'Africa/Mbabane',
            zone: 'SAST',
            zoneDST: 'SAST',
            latitude: -26.18,
            longitude: +31.06,
            baseUTCOffset: +2,
            DSTDirection: +0
        }, {
            name: 'Africa/Mogadishu',
            zone: 'EAT',
            zoneDST: 'EAT',
            latitude: +2.04,
            longitude: +45.22,
            baseUTCOffset: +3,
            DSTDirection: +0
        }, {
            name: 'Africa/Monrovia',
            zone: 'GMT',
            zoneDST: 'GMT',
            latitude: +6.18,
            longitude: -10.47,
            baseUTCOffset: +0,
            DSTDirection: +0
        }, {
            name: 'Africa/Nairobi',
            zone: 'EAT',
            zoneDST: 'EAT',
            latitude: -1.17,
            longitude: +36.49,
            baseUTCOffset: +3,
            DSTDirection: +0
        }, {
            name: 'Africa/Ndjamena',
            zone: 'WAT',
            zoneDST: 'WAT',
            latitude: +12.07,
            longitude: +15.03,
            baseUTCOffset: +1,
            DSTDirection: +0
        }, {
            name: 'Africa/Niamey',
            zone: 'WAT',
            zoneDST: 'WAT',
            latitude: +13.31,
            longitude: +2.07,
            baseUTCOffset: +1,
            DSTDirection: +0
        }, {
            name: 'Africa/Nouakchott',
            zone: 'GMT',
            zoneDST: 'GMT',
            latitude: +18.06,
            longitude: -15.57,
            baseUTCOffset: +0,
            DSTDirection: +0
        }, {
            name: 'Africa/Ouagadougou',
            zone: 'GMT',
            zoneDST: 'GMT',
            latitude: +12.22,
            longitude: -1.31,
            baseUTCOffset: +0,
            DSTDirection: +0
        }, {
            name: 'Africa/Porto-Novo',
            zone: 'WAT',
            zoneDST: 'WAT',
            latitude: +6.29,
            longitude: +2.37,
            baseUTCOffset: +1,
            DSTDirection: +0
        }, {
            name: 'Africa/Sao_Tome',
            zone: 'GMT',
            zoneDST: 'GMT',
            latitude: +0.20,
            longitude: +6.44,
            baseUTCOffset: +0,
            DSTDirection: +0
        }, {
            name: 'Africa/Tripoli',
            zone: 'EET',
            zoneDST: 'EET',
            latitude: +32.54,
            longitude: +13.11,
            baseUTCOffset: +2,
            DSTDirection: +0
        }, {
            name: 'Africa/Tunis',
            zone: 'CET',
            zoneDST: 'CET',
            latitude: +36.48,
            longitude: +10.11,
            baseUTCOffset: +1,
            DSTDirection: +0
        }, {
            name: 'Africa/Windhoek',
            zone: 'WAT',
            zoneDST: 'WAST',
            latitude: -22.34,
            longitude: +17.06,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getWindhoekDSTStart,
            getDSTEnd: getWindhoekDSTEnd
        }, {
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

    function getDaysOfMonth(year, month) {
        var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            days[1] = 29;
        }
        return days[month];
    }

    function findFirstOfMonth(year, month, day) {
        var date = new Date(year, month, 1);
        day = date.getDate() - date.getDay() + day;
        return day > 0 ? day : day + 7;
    }

    function findLastOfMonth(year, month, day) {
        var date = new Date(year, month, getDaysOfMonth(year, month));
        return date.getDate() - date.getDay() + day;
    }

    function getESTStart(year) {
        return new Date(Date.UTC(year, 2, findLastOfMonth(year, 2, 0), 1, 0, 0, 0));
    }

    function getESTEnd(year) {
        return new Date(Date.UTC(year, 9, findLastOfMonth(year, 9, 0), 1, 0, 0, 0));
    }

    function getWindhoekDSTStart(year) {
        return new Date(year, 8, findFirstOfMonth(year, 8, 0), 2, 0, 0, 0);
    }

    function getWindhoekDSTEnd(year) {
        return new Date(year, 3, findFirstOfMonth(year, 3, 0), 2, 0, 0, 0);
    }

    function getRamadanDSTStart(year, month, day) {
        if (getRamadanStart(year, month + 1, day) >= new Date(year, month, day)) {
            return getESTStart(year);
        }
        return getRamadanEnd(year, month + 1, day);
    }

    function getRamadanDSTEnd(year, month, day) {
        if (getRamadanEnd(year, month + 1, day) >= new Date(year, month, day)) {
            return getRamadanStart(year, month + 1, day);
        }
        return getESTEnd(year);
    }

    function getIslamicFromGregorianDate(year, month, day) {
        var c0 = Math.floor((month - 3) / 12);
        var x4 = year + c0;
        var x3 = Math.floor(x4 / 100);
        var x2 = x4 % 100;
        var x1 = month - (12 * c0) - 3;
        var cjdn = Math.floor((146097 * x3) / 4) + Math.floor((36525 * x2) / 100) + Math.floor(((153 * x1) + 2) / 5) + day + 1721119;
        var k2 = (30 * (cjdn - 1948440)) + 15;
        var k1 = (11 * Math.floor((k2 % 10631) / 30)) + 5;
        var islamicDate = [];
        islamicDate['year'] = Math.floor(k2 / 10631) + 1;
        islamicDate['month'] = Math.floor(k1 / 325) + 1;
        islamicDate['day'] = Math.floor((k1 % 325) / 11) + 1;
        return islamicDate;
    }

    function getGregorianFromIslamicDate(year, month, day) {
        var cjdn = Math.floor(((10631 * year) - 10617) / 30) + Math.floor(((325 * month) - 320) / 11) + day + 1948439;
        var k3 = (4 * cjdn) - 6884477;
        var x3 = Math.floor(k3 / 146097);
        var r3 = k3 % 146097;
        var k2 = (100 * Math.floor(r3 / 4)) + 99;
        var x2 = Math.floor(k2 / 36525);
        var r2 = k2 % 36525;
        var k1 = (5 * Math.floor(r2 / 100)) + 2;
        var x1 = Math.floor(k1 / 153);
        var r1 = k1 % 153;
        var c0 = Math.floor((x1 + 2) / 12);
        year = (100 * x3) + x2 + c0;
        month = x1 - (12 * c0) + 3;
        day = Math.floor(r1 / 5) + 1;
        return new Date(year, month - 1, day);
    }

    function getRamadanStart(year, month, day) {
        var islamicDate = getIslamicFromGregorianDate(year, month + 1, day);
        return getGregorianFromIslamicDate(islamicDate['year'], 9, 1);
    }

    function getRamadanEnd(year, month, day) {
        var islamicDate = getIslamicFromGregorianDate(year, month + 1, day);
        return getGregorianFromIslamicDate(islamicDate['year'], 9, 30);
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
                var DSTStart = timezone.getDSTStart(timestamp.getFullYear(), timestamp.getMonth(), timestamp.getDate());
                var DSTEnd = timezone.getDSTEnd(timestamp.getFullYear(), timestamp.getMonth(), timestamp.getDate());
                if (DSTStart > DSTEnd) {
                    return timestamp <= DSTEnd || timestamp >= DSTStart;
                }
                return timestamp >= DSTStart && timestamp <= DSTEnd;
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