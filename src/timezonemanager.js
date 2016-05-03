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
            latitude: +14.4,
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
            latitude: +8.3,
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
            latitude: +0.2,
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
            name: 'America/Adak',
            zone: 'HAST',
            zoneDST: 'HADT',
            latitude: +51.5248,
            longitude: -176.3929,
            baseUTCOffset: -10,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Anchorage',
            zone: 'AKST',
            zoneDST: 'AKDT',
            latitude: +61.1305,
            longitude: -149.5401,
            baseUTCOffset: -9,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Anguilla',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +18.12,
            longitude: -63.04,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Antigua',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +17.03,
            longitude: -61.48,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Araguaina',
            zone: 'BRT',
            zoneDST: 'BRT',
            latitude: -7.12,
            longitude: -48.12,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Argentina/Buenos_Aires',
            zone: 'ART',
            zoneDST: 'ART',
            latitude: -34.36,
            longitude: -58.27,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Argentina/Catamarca',
            zone: 'ART',
            zoneDST: 'ART',
            latitude: -28.28,
            longitude: -65.47,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Argentina/Cordoba',
            zone: 'ART',
            zoneDST: 'ART',
            latitude: -31.24,
            longitude: -64.11,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Argentina/Jujuy',
            zone: 'ART',
            zoneDST: 'ART',
            latitude: -24.11,
            longitude: -65.18,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Argentina/La_Rioja',
            zone: 'ART',
            zoneDST: 'ART',
            latitude: -29.26,
            longitude: -66.51,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Argentina/Mendoza',
            zone: 'ART',
            zoneDST: 'ART',
            latitude: -32.53,
            longitude: -68.49,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Argentina/Rio_Gallegos',
            zone: 'ART',
            zoneDST: 'ART',
            latitude: -51.38,
            longitude: -69.13,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Argentina/Salta',
            zone: 'ART',
            zoneDST: 'ART',
            latitude: -24.47,
            longitude: -65.25,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Argentina/San_Juan',
            zone: 'ART',
            zoneDST: 'ART',
            latitude: -31.32,
            longitude: -68.31,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Argentina/San_Luis',
            zone: 'ART',
            zoneDST: 'ART',
            latitude: -33.19,
            longitude: -66.21,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Argentina/Tucuman',
            zone: 'ART',
            zoneDST: 'ART',
            latitude: -26.49,
            longitude: -65.13,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Argentina/Ushuaia',
            zone: 'ART',
            zoneDST: 'ART',
            latitude: -54.48,
            longitude: -68.18,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Aruba',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +12.3,
            longitude: -69.58,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Asuncion',
            zone: 'PYT',
            zoneDST: 'PYST',
            latitude: -25.16,
            longitude: -57.4,
            baseUTCOffset: -3,
            DSTDirection: +1,
            getDSTStart: getParaguayDSTStart,
            getDSTEnd: getParaguayDSTEnd
        }, {
            name: 'America/Atikokan',
            zone: 'EST',
            zoneDST: 'EST',
            latitude: +48.4531,
            longitude: -91.3718,
            baseUTCOffset: -5,
            DSTDirection: +0
        }, {
            name: 'America/Bahia',
            zone: 'BRT',
            zoneDST: 'BRT',
            latitude: -12.59,
            longitude: -38.31,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Bahia_Banderas',
            zone: 'BRT',
            zoneDST: 'BRT',
            latitude: +20.48,
            longitude: -10.515,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Barbados',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +13.06,
            longitude: -59.37,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Belem',
            zone: 'BRT',
            zoneDST: 'BRT',
            latitude: -1.27,
            longitude: -48.29,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Belize',
            zone: 'CST',
            zoneDST: 'CST',
            latitude: +17.3,
            longitude: -88.12,
            baseUTCOffset: -6,
            DSTDirection: +0
        }, {
            name: 'America/Blanc-Sablon',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +51.25,
            longitude: -57.07,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Boa_Vista',
            zone: 'AMT',
            zoneDST: 'AMT',
            latitude: +2.49,
            longitude: -60.4,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Bogota',
            zone: 'COT',
            zoneDST: 'COT',
            latitude: +4.36,
            longitude: -74.05,
            baseUTCOffset: -5,
            DSTDirection: +0
        }, {
            name: 'America/Boise',
            zone: 'MST',
            zoneDST: 'MDT',
            latitude: +43.3649,
            longitude: -116.1209,
            baseUTCOffset: -7,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Cambridge_Bay',
            zone: 'MST',
            zoneDST: 'MDT',
            latitude: +69.065,
            longitude: -105.031,
            baseUTCOffset: -7,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Campo_Grande',
            zone: 'AMT',
            zoneDST: 'AMST',
            latitude: -20.27,
            longitude: -54.37,
            baseUTCOffset: -4,
            DSTDirection: +1,
            getDSTStart: getBrazilDSTStart,
            getDSTEnd: getBrazilDSTEnd
        }, {
            name: 'America/Cancun',
            zone: 'EST',
            zoneDST: 'EST',
            latitude: +21.05,
            longitude: -86.46,
            baseUTCOffset: -5,
            DSTDirection: +0
        }, {
            name: 'America/Caracas',
            zone: 'VET',
            zoneDST: 'VET',
            latitude: +10.30,
            longitude: -66.56,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Cayenne',
            zone: 'GFT',
            zoneDST: 'GFT',
            latitude: +4.56,
            longitude: -52.2,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Cayman',
            zone: 'EST',
            zoneDST: 'EST',
            latitude: +19.18,
            longitude: -81.23,
            baseUTCOffset: -5,
            DSTDirection: +0
        }, {
            name: 'America/Chicago',
            zone: 'CST',
            zoneDST: 'CDT',
            latitude: +41.51,
            longitude: -87.39,
            baseUTCOffset: -6,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Chihuahua',
            zone: 'MST',
            zoneDST: 'MDT',
            latitude: +28.38,
            longitude: -106.05,
            baseUTCOffset: -7,
            DSTDirection: +1,
            getDSTStart: getMexicoDSTStart,
            getDSTEnd: getMexicoDSTEnd
        }, {
            name: 'America/Costa_Rica',
            zone: 'CST',
            zoneDST: 'CST',
            latitude: +9.56,
            longitude: -84.05,
            baseUTCOffset: -6,
            DSTDirection: +0
        }, {
            name: 'America/Creston',
            zone: 'MST',
            zoneDST: 'MST',
            latitude: +49.06,
            longitude: -116.31,
            baseUTCOffset: -7,
            DSTDirection: +0
        }, {
            name: 'America/Cuiaba',
            zone: 'AMT',
            zoneDST: 'AMST',
            latitude: -15.35,
            longitude: -56.05,
            baseUTCOffset: -4,
            DSTDirection: +1,
            getDSTStart: getBrazilDSTStart,
            getDSTEnd: getBrazilDSTEnd
        }, {
            name: 'America/Curacao',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +12.11,
            longitude: -69.0,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Danmarkshavn',
            zone: 'GMT',
            zoneDST: 'GMT',
            latitude: +76.46,
            longitude: -18.4,
            baseUTCOffset: +0,
            DSTDirection: +0
        }, {
            name: 'America/Dawson',
            zone: 'PST',
            zoneDST: 'PDT',
            latitude: +59.46,
            longitude: -120.14,
            baseUTCOffset: -8,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Dawson_Creek',
            zone: 'MST',
            zoneDST: 'MST',
            latitude: +64.04,
            longitude: -139.25,
            baseUTCOffset: -7,
            DSTDirection: +0
        }, {
            name: 'America/Denver',
            zone: 'MST',
            zoneDST: 'MDT',
            latitude: +39.4421,
            longitude: -104.5903,
            baseUTCOffset: -7,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Detroit',
            zone: 'EST',
            zoneDST: 'EDT',
            latitude: +42.1953,
            longitude: -83.0245,
            baseUTCOffset: -5,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Dominica',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +15.18,
            longitude: -61.24,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Edmonton',
            zone: 'MST',
            zoneDST: 'MDT',
            latitude: +53.33,
            longitude: -113.28,
            baseUTCOffset: -7,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Eirunepe',
            zone: 'ACT',
            zoneDST: 'ACT',
            latitude: -6.4,
            longitude: -69.52,
            baseUTCOffset: -5,
            DSTDirection: +0
        }, {
            name: 'America/El_Salvador',
            zone: 'CST',
            zoneDST: 'CST',
            latitude: +13.42,
            longitude: -89.12,
            baseUTCOffset: -6,
            DSTDirection: +0
        }, {
            name: 'America/Fort_Nelson',
            zone: 'MST',
            zoneDST: 'MST',
            latitude: +58.48,
            longitude: -122.42,
            baseUTCOffset: -7,
            DSTDirection: +0
        }, {
            name: 'America/Fortaleza',
            zone: 'BRT',
            zoneDST: 'BRT',
            latitude: -3.43,
            longitude: -38.3,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Glace_Bay',
            zone: 'AST',
            zoneDST: 'ADT',
            latitude: +46.12,
            longitude: -59.57,
            baseUTCOffset: -4,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Godthab',
            zone: 'WGT',
            zoneDST: 'WGST',
            latitude: +64.11,
            longitude: -51.44,
            baseUTCOffset: -3,
            DSTDirection: +1,
            getDSTStart: getGreenlandDSTStart,
            getDSTEnd: getGreenlandDSTEnd
        }, {
            name: 'America/Goose_Bay',
            zone: 'AST',
            zoneDST: 'ADT',
            latitude: +53.2,
            longitude: -60.25,
            baseUTCOffset: -4,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Grand_Turk',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +21.28,
            longitude: -71.08,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Grenada',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +12.03,
            longitude: -61.45,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Guadeloupe',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +16.14,
            longitude: -61.32,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Guatemala',
            zone: 'CST',
            zoneDST: 'CST',
            latitude: +14.38,
            longitude: -90.31,
            baseUTCOffset: -6,
            DSTDirection: +0
        }, {
            name: 'America/Guayaquil',
            zone: 'ECT',
            zoneDST: 'ECT',
            latitude: -2.1,
            longitude: -79.5,
            baseUTCOffset: -5,
            DSTDirection: +0
        }, {
            name: 'America/Guyana',
            zone: 'GYT',
            zoneDST: 'GYT',
            latitude: +6.48,
            longitude: -58.1,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Halifax',
            zone: 'AST',
            zoneDST: 'ADT',
            latitude: +44.39,
            longitude: -63.36,
            baseUTCOffset: -4,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Havana',
            zone: 'CST',
            zoneDST: 'CDT',
            latitude: +23.08,
            longitude: -82.22,
            baseUTCOffset: -5,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Hermosillo',
            zone: 'MST',
            zoneDST: 'MST',
            latitude: +29.04,
            longitude: -110.58,
            baseUTCOffset: -7,
            DSTDirection: +0
        }, {
            name: 'America/Indiana/Indianapolis',
            zone: 'EST',
            zoneDST: 'EDT',
            latitude: +39.4606,
            longitude: -86.0929,
            baseUTCOffset: -5,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Indiana/Knox',
            zone: 'CST',
            zoneDST: 'CDT',
            latitude: +41.1745,
            longitude: -86.373,
            baseUTCOffset: -6,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Indiana/Marengo',
            zone: 'EST',
            zoneDST: 'EDT',
            latitude: +38.2232,
            longitude: -86.2041,
            baseUTCOffset: -5,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Indiana/Petersburg',
            zone: 'EST',
            zoneDST: 'EDT',
            latitude: +38.2931,
            longitude: -87.1643,
            baseUTCOffset: -5,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Indiana/Tell_City',
            zone: 'CST',
            zoneDST: 'CDT',
            latitude: +37.5711,
            longitude: -86.4541,
            baseUTCOffset: -6,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Indiana/Vevay',
            zone: 'EST',
            zoneDST: 'EDT',
            latitude: +38.4452,
            longitude: -85.0402,
            baseUTCOffset: -5,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Indiana/Vincennes',
            zone: 'EST',
            zoneDST: 'EDT',
            latitude: +38.4038,
            longitude: -87.3143,
            baseUTCOffset: -5,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Indiana/Winamac',
            zone: 'EST',
            zoneDST: 'EDT',
            latitude: +41.0305,
            longitude: -86.3611,
            baseUTCOffset: -5,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Inuvik',
            zone: 'MST',
            zoneDST: 'MDT',
            latitude: +68.2059,
            longitude: -133.43,
            baseUTCOffset: -7,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Iqaluit',
            zone: 'EST',
            zoneDST: 'EDT',
            latitude: +63.44,
            longitude: -68.28,
            baseUTCOffset: -5,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Jamaica',
            zone: 'EST',
            zoneDST: 'EST',
            latitude: +17.5805,
            longitude: -76.4736,
            baseUTCOffset: -5,
            DSTDirection: +0
        }, {
            name: 'America/Juneau',
            zone: 'AKST',
            zoneDST: 'AKDT',
            latitude: +58.1807,
            longitude: -134.2511,
            baseUTCOffset: -9,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Kentucky/Louisville',
            zone: 'EST',
            zoneDST: 'EDT',
            latitude: +38.1515,
            longitude: -85.4534,
            baseUTCOffset: -5,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Kentucky/Monticello',
            zone: 'EST',
            zoneDST: 'EDT',
            latitude: +36.4947,
            longitude: -84.5057,
            baseUTCOffset: -5,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Kralendijk',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +12.0903,
            longitude: -68.1636,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/La_Paz',
            zone: 'BOT',
            zoneDST: 'BOT',
            latitude: -16.3,
            longitude: -68.09,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Lima',
            zone: 'PET',
            zoneDST: 'PET',
            latitude: -12.03,
            longitude: -77.03,
            baseUTCOffset: -5,
            DSTDirection: +0
        }, {
            name: 'America/Los_Angeles',
            zone: 'PST',
            zoneDST: 'PDT',
            latitude: +34.0308,
            longitude: -118.1434,
            baseUTCOffset: -8,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Lower_Princes',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +18.0305,
            longitude: -63.025,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Maceio',
            zone: 'BRT',
            zoneDST: 'BRT',
            latitude: -9.4,
            longitude: -35.43,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Managua',
            zone: 'CST',
            zoneDST: 'CST',
            latitude: +12.09,
            longitude: -86.17,
            baseUTCOffset: -6,
            DSTDirection: +0
        }, {
            name: 'America/Manaus',
            zone: 'AMT',
            zoneDST: 'AMT',
            latitude: -3.08,
            longitude: -60.01,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Marigot',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +18.04,
            longitude: -63.05,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Martinique',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +14.36,
            longitude: -61.05,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Matamoros',
            zone: 'CST',
            zoneDST: 'CDT',
            latitude: +25.5,
            longitude: -97.3,
            baseUTCOffset: -6,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Mazatlan',
            zone: 'MST',
            zoneDST: 'MDT',
            latitude: +23.13,
            longitude: -106.25,
            baseUTCOffset: -7,
            DSTDirection: +1,
            getDSTStart: getMexicoDSTStart,
            getDSTEnd: getMexicoDSTEnd
        }, {
            name: 'America/Menominee',
            zone: 'CST',
            zoneDST: 'CDT',
            latitude: +45.0628,
            longitude: -87.3651,
            baseUTCOffset: -6,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Merida',
            zone: 'CST',
            zoneDST: 'CDT',
            latitude: +20.58,
            longitude: -89.37,
            baseUTCOffset: -6,
            DSTDirection: +1,
            getDSTStart: getMexicoDSTStart,
            getDSTEnd: getMexicoDSTEnd
        }, {
            name: 'America/Metlakatla',
            zone: 'AKST',
            zoneDST: 'AKDT',
            latitude: +55.0737,
            longitude: -131.3435,
            baseUTCOffset: -9,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Mexico_City',
            zone: 'CST',
            zoneDST: 'CDT',
            latitude: +19.24,
            longitude: -99.09,
            baseUTCOffset: -6,
            DSTDirection: +1,
            getDSTStart: getMexicoDSTStart,
            getDSTEnd: getMexicoDSTEnd
        }, {
            name: 'America/Miquelon',
            zone: 'PMST',
            zoneDST: 'PMDT',
            latitude: +47.03,
            longitude: -56.2,
            baseUTCOffset: -3,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Moncton',
            zone: 'AST',
            zoneDST: 'ADT',
            latitude: +46.06,
            longitude: -64.47,
            baseUTCOffset: -4,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Monterrey',
            zone: 'CST',
            zoneDST: 'CDT',
            latitude: +25.4,
            longitude: -100.19,
            baseUTCOffset: -6,
            DSTDirection: +1,
            getDSTStart: getMexicoDSTStart,
            getDSTEnd: getMexicoDSTEnd
        }, {
            name: 'America/Montevideo',
            zone: 'UYT',
            zoneDST: 'UYT',
            latitude: -34.53,
            longitude: -56.11,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Montserrat',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +16.43,
            longitude: -62.13,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Nassau',
            zone: 'EST',
            zoneDST: 'EDT',
            latitude: +25.05,
            longitude: -77.21,
            baseUTCOffset: -5,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/New_York',
            zone: 'EST',
            zoneDST: 'EDT',
            latitude: +40.4251,
            longitude: -74.0023,
            baseUTCOffset: -5,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Nipigon',
            zone: 'EST',
            zoneDST: 'EDT',
            latitude: +49.01,
            longitude: -88.16,
            baseUTCOffset: -5,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Nome',
            zone: 'AKST',
            zoneDST: 'AKDT',
            latitude: +64.3004,
            longitude: -165.2423,
            baseUTCOffset: -9,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Noronha',
            zone: 'FNT',
            zoneDST: 'FNT',
            latitude: -3.51,
            longitude: -32.25,
            baseUTCOffset: -2,
            DSTDirection: +0
        }, {
            name: 'America/North_Dakota/Beulah',
            zone: 'CST',
            zoneDST: 'CDT',
            latitude: +47.1551,
            longitude: -101.464,
            baseUTCOffset: -6,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/North_Dakota/Center',
            zone: 'CST',
            zoneDST: 'CDT',
            latitude: +47.0659,
            longitude: -101.1757,
            baseUTCOffset: -6,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/North_Dakota/New_Salem',
            zone: 'CST',
            zoneDST: 'CDT',
            latitude: +46.5042,
            longitude: -101.2439,
            baseUTCOffset: -6,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Ojinaga',
            zone: 'MST',
            zoneDST: 'MDT',
            latitude: +29.34,
            longitude: -104.25,
            baseUTCOffset: -7,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Panama',
            zone: 'EST',
            zoneDST: 'EST',
            latitude: +8.58,
            longitude: -79.32,
            baseUTCOffset: -5,
            DSTDirection: +0
        }, {
            name: 'America/Pangnirtung',
            zone: 'EST',
            zoneDST: 'EDT',
            latitude: +66.08,
            longitude: -65.44,
            baseUTCOffset: -5,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Paramaribo',
            zone: 'SRT',
            zoneDST: 'SRT',
            latitude: +5.5,
            longitude: -55.1,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Phoenix',
            zone: 'MST',
            zoneDST: 'MST',
            latitude: +33.2654,
            longitude: -112.0424,
            baseUTCOffset: -7,
            DSTDirection: +0
        }, {
            name: 'America/Port_of_Spain',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +10.39,
            longitude: -61.31,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Port-au-Prince',
            zone: 'EST',
            zoneDST: 'EDT',
            latitude: +18.32,
            longitude: -72.2,
            baseUTCOffset: -5,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Porto_Velho',
            zone: 'AMT',
            zoneDST: 'AMT',
            latitude: -8.46,
            longitude: -63.54,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Puerto_Rico',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +18.2806,
            longitude: -66.0622,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Rainy_River',
            zone: 'CST',
            zoneDST: 'CDT',
            latitude: +48.43,
            longitude: -94.34,
            baseUTCOffset: -6,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Rankin_Inlet',
            zone: 'CST',
            zoneDST: 'CDT',
            latitude: +62.49,
            longitude: -92.0459,
            baseUTCOffset: -6,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Recife',
            zone: 'BRT',
            zoneDST: 'BRT',
            latitude: -8.03,
            longitude: -34.54,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Regina',
            zone: 'CST',
            zoneDST: 'CST',
            latitude: +50.24,
            longitude: -104.39,
            baseUTCOffset: -6,
            DSTDirection: +0
        }, {
            name: 'America/Resolute',
            zone: 'CST',
            zoneDST: 'CDT',
            latitude: +74.4144,
            longitude: -94.4945,
            baseUTCOffset: -6,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Rio_Branco',
            zone: 'ACT',
            zoneDST: 'ACT',
            latitude: -9.58,
            longitude: -67.48,
            baseUTCOffset: -5,
            DSTDirection: +0
        }, {
            name: 'America/Santarem',
            zone: 'BRT',
            zoneDST: 'BRT',
            latitude: -2.26,
            longitude: -54.52,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'America/Santiago',
            zone: 'CLT',
            zoneDST: 'CLST',
            latitude: -33.27,
            longitude: -70.4,
            baseUTCOffset: -4,
            DSTDirection: +1,
            getDSTStart: getChileDSTStart,
            getDSTEnd: getChileDSTEnd
        }, {
            name: 'America/Santo_Domingo',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +18.28,
            longitude: -69.54,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Sao_Paulo',
            zone: 'BRT',
            zoneDST: 'BRST',
            latitude: -23.32,
            longitude: -46.37,
            baseUTCOffset: -3,
            DSTDirection: +1,
            getDSTStart: getBrazilDSTStart,
            getDSTEnd: getBrazilDSTEnd
        }, {
            name: 'America/Scoresbysund',
            zone: 'EGT',
            zoneDST: 'EGST',
            latitude: +70.29,
            longitude: -21.58,
            baseUTCOffset: -1,
            DSTDirection: +1,
            getDSTStart: getGreenlandDSTStart,
            getDSTEnd: getGreenlandDSTEnd
        }, {
            name: 'America/Sitka',
            zone: 'AKST',
            zoneDST: 'AKDT',
            latitude: +57.1035,
            longitude: -135.1807,
            baseUTCOffset: -9,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/St_Barthelemy',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +17.53,
            longitude: -62.51,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/St_Johns',
            zone: 'NST',
            zoneDST: 'NDT',
            latitude: +47.34,
            longitude: -52.43,
            baseUTCOffset: -3.5,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/St_Kitts',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +17.18,
            longitude: -62.43,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/St_Lucia',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +14.01,
            longitude: -61.0,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/St_Thomas',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +18.21,
            longitude: -64.56,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/St_Vincent',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +13.09,
            longitude: -61.14,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Swift_Current',
            zone: 'CST',
            zoneDST: 'CST',
            latitude: +50.17,
            longitude: -107.5,
            baseUTCOffset: -6,
            DSTDirection: +0
        }, {
            name: 'America/Tegucigalpa',
            zone: 'CST',
            zoneDST: 'CST',
            latitude: +14.06,
            longitude: -87.13,
            baseUTCOffset: -6,
            DSTDirection: +0
        }, {
            name: 'America/Thule',
            zone: 'AST',
            zoneDST: 'ADT',
            latitude: +76.34,
            longitude: -68.47,
            baseUTCOffset: -4,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Thunder_Bay',
            zone: 'EST',
            zoneDST: 'EDT',
            latitude: +48.23,
            longitude: -89.15,
            baseUTCOffset: -5,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Tijuana',
            zone: 'PST',
            zoneDST: 'PDT',
            latitude: +32.32,
            longitude: -117.01,
            baseUTCOffset: -8,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Toronto',
            zone: 'EST',
            zoneDST: 'EDT',
            latitude: +43.39,
            longitude: -79.23,
            baseUTCOffset: -5,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Tortola',
            zone: 'AST',
            zoneDST: 'AST',
            latitude: +18.27,
            longitude: -64.37,
            baseUTCOffset: -4,
            DSTDirection: +0
        }, {
            name: 'America/Vancouver',
            zone: 'PST',
            zoneDST: 'PDT',
            latitude: +49.16,
            longitude: -123.07,
            baseUTCOffset: -8,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Whitehorse',
            zone: 'PST',
            zoneDST: 'PDT',
            latitude: +60.43,
            longitude: -135.03,
            baseUTCOffset: -8,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Winnipeg',
            zone: 'CST',
            zoneDST: 'CDT',
            latitude: +49.53,
            longitude: -97.09,
            baseUTCOffset: -6,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Yakutat',
            zone: 'AKST',
            zoneDST: 'AKDT',
            latitude: +59.3249,
            longitude: -139.4338,
            baseUTCOffset: -9,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'America/Yellowknife',
            zone: 'MST',
            zoneDST: 'MDT',
            latitude: +62.27,
            longitude: -114.21,
            baseUTCOffset: -7,
            DSTDirection: +1,
            getDSTStart: getUSADSTStart,
            getDSTEnd: getUSADSTEnd
        }, {
            name: 'Antarctica/Casey',
            zone: 'CAST',
            zoneDST: 'CAST',
            latitude: -66.17,
            longitude: +110.31,
            baseUTCOffset: +8,
            DSTDirection: +0
        }, {
            name: 'Antarctica/Davis',
            zone: 'DAVT',
            zoneDST: 'DAVT',
            latitude: -68.35,
            longitude: +77.58,
            baseUTCOffset: +7,
            DSTDirection: +0
        }, {
            name: 'Antarctica/DumontDUrville',
            zone: 'DDUT',
            zoneDST: 'DDUT',
            latitude: -66.4,
            longitude: +140.01,
            baseUTCOffset: +10,
            DSTDirection: +0
        }, {
            name: 'Antarctica/Macquarie',
            zone: 'AEDT',
            zoneDST: 'AEDT',
            latitude: -54.3,
            longitude: +158.57,
            baseUTCOffset: +11,
            DSTDirection: +0
        }, {
            name: 'Antarctica/Mawson',
            zone: 'MAWT',
            zoneDST: 'MAWT',
            latitude: -67.36,
            longitude: +62.53,
            baseUTCOffset: +5,
            DSTDirection: +0
        }, {
            name: 'Antarctica/McMurdo',
            zone: 'NZST',
            zoneDST: 'NZDT',
            latitude: -77.5,
            longitude: +166.36,
            baseUTCOffset: +12,
            DSTDirection: +1,
            getDSTStart: getNewZealandDSTStart,
            getDSTEnd: getNewZealandDSTEnd
        }, {
            name: 'Antarctica/Palmer',
            zone: 'CLT',
            zoneDST: 'CLST',
            latitude: -64.48,
            longitude: -64.06,
            baseUTCOffset: -4,
            DSTDirection: +1,
            getDSTStart: getChileDSTStart,
            getDSTEnd: getChileDSTEnd
        }, {
            name: 'Antarctica/Rothera',
            zone: 'ART',
            zoneDST: 'ART',
            latitude: -67.34,
            longitude: -68.08,
            baseUTCOffset: -3,
            DSTDirection: +0
        }, {
            name: 'Antarctica/Syowa',
            zone: 'SYOT',
            zoneDST: 'SYOT',
            latitude: -69.0022,
            longitude: +39.3524,
            baseUTCOffset: +3,
            DSTDirection: +0
        }, {
            name: 'Antarctica/Troll',
            zone: 'GMT',
            zoneDST: 'CET|CEST',
            latitude: -72.0041,
            longitude: +232.06,
            baseUTCOffset: +0,
            DSTDirection: +1,
            getDSTStart: getTrollDSTStart,
            getDSTEnd: getTrollDSTEnd
        }, {
            name: 'Antarctica/Vostok',
            zone: 'VOST',
            zoneDST: 'VOST',
            latitude: -78.24,
            longitude: +106.54,
            baseUTCOffset: +6,
            DSTDirection: +0
        }, {
            name: 'Arctic/Longyearbyen',
            zone: 'CET',
            zoneDST: 'CEST',
            latitude: +78.0,
            longitude: +16.0,
            baseUTCOffset: +1,
            DSTDirection: +1,
            getDSTStart: getESTStart,
            getDSTEnd: getESTEnd
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

    function convertDateToMatchTimezone(date, offset) {
        offset *= 3600000;
        offset += date.getTimezoneOffset() * 60000;
        return new Date(date.getTime() + offset);
    }

    function getESTStart(year) {
        return new Date(Date.UTC(year, 2, findLastOfMonth(year, 2, 0), 1, 0, 0, 0));
    }

    function getESTEnd(year) {
        return new Date(Date.UTC(year, 9, findLastOfMonth(year, 9, 0), 1, 0, 0, 0));
    }

    function getWindhoekDSTStart(year) {
        //noinspection JSUnresolvedVariable
        return convertDateToMatchTimezone(new Date(year, 8, findFirstOfMonth(year, 8, 0), 2, 0, 0, 0), this.baseUTCOffset);
    }

    function getWindhoekDSTEnd(year) {
        //noinspection JSUnresolvedVariable
        return convertDateToMatchTimezone(new Date(year, 3, findFirstOfMonth(year, 3, 0), 2, 0, 0, 0), this.baseUTCOffset + this.DSTDirection);
    }

    function getRamadanDSTStart(year, month, day) {
        if (getRamadanStart(year, month + 1, day) >= new Date(year, month, day)) {
            return new Date(Date.UTC(year, 2, findLastOfMonth(year, 2, 0), 2, 0, 0, 0));
        }
        return getRamadanEnd(year, month + 1, day);
    }

    function getRamadanDSTEnd(year, month, day) {
        if (getRamadanEnd(year, month + 1, day) >= new Date(year, month, day)) {
            return getRamadanStart(year, month + 1, day);
        }
        return new Date(Date.UTC(year, 9, findLastOfMonth(year, 9, 0), 2, 0, 0, 0));
    }

    function getUSADSTStart(year) {
        //noinspection JSUnresolvedVariable
        return convertDateToMatchTimezone(new Date(year, 2, findFirstOfMonth(year, 2, 0) + 7, 2, 0, 0, 0), this.baseUTCOffset);
    }

    function getUSADSTEnd(year) {
        //noinspection JSUnresolvedVariable
        return convertDateToMatchTimezone(new Date(year, 10, findFirstOfMonth(year, 10, 0), 2, 0, 0, 0), this.baseUTCOffset + this.DSTDirection);
    }

    function getParaguayDSTStart(year) {
        //noinspection JSUnresolvedVariable
        return convertDateToMatchTimezone(new Date(year, 9, findFirstOfMonth(year, 9, 0) + 14, 0, 0, 0, 0), this.baseUTCOffset);
    }

    function getParaguayDSTEnd(year) {
        //noinspection JSUnresolvedVariable
        return convertDateToMatchTimezone(new Date(year, 3, findFirstOfMonth(year, 3, 0) + 7, 0, 0, 0, 0), this.baseUTCOffset + this.DSTDirection);
    }

    function getBrazilDSTStart(year) {
        //noinspection JSUnresolvedVariable
        return convertDateToMatchTimezone(new Date(year, 9, findFirstOfMonth(year, 9, 0) + 14, 0, 0, 0, 0), this.baseUTCOffset);
    }

    function getBrazilDSTEnd(year) {
        //noinspection JSUnresolvedVariable
        return convertDateToMatchTimezone(new Date(year, 1, findFirstOfMonth(year, 1, 0) + 14, 0, 0, 0, 0), this.baseUTCOffset + this.DSTDirection);
    }

    function getMexicoDSTStart(year) {
        //noinspection JSUnresolvedVariable
        return convertDateToMatchTimezone(new Date(year, 3, findFirstOfMonth(year, 3, 0), 2, 0, 0, 0), this.baseUTCOffset);
    }

    function getMexicoDSTEnd(year) {
        //noinspection JSUnresolvedVariable
        return convertDateToMatchTimezone(new Date(year, 9, findLastOfMonth(year, 9, 0), 2, 0, 0, 0), this.baseUTCOffset + this.DSTDirection);
    }

    function getGreenlandDSTStart(year) {
        return new Date(Date.UTC(year, 2, findLastOfMonth(year, 2, 0), 1, 0, 0, 0));
    }

    function getGreenlandDSTEnd(year) {
        return new Date(Date.UTC(year, 9, findLastOfMonth(year, 9, 0), 1, 0, 0, 0));
    }

    function getChileDSTStart(year) {
        //noinspection JSUnresolvedVariable
        return convertDateToMatchTimezone(new Date(year, 7, findFirstOfMonth(year, 7, 0) + 14, 0, 0, 0, 0), this.baseUTCOffset);
    }

    function getChileDSTEnd(year) {
        //noinspection JSUnresolvedVariable
        return convertDateToMatchTimezone(new Date(year, 4, findLastOfMonth(year, 4, 0) + 14, 0, 0, 0, 0), this.baseUTCOffset + this.DSTDirection);
    }

    function getNewZealandDSTStart(year) {
        //noinspection JSUnresolvedVariable
        return convertDateToMatchTimezone(new Date(year, 8, findLastOfMonth(year, 8, 0), 2, 0, 0, 0), this.baseUTCOffset);
    }

    function getNewZealandDSTEnd(year) {
        //noinspection JSUnresolvedVariable
        return convertDateToMatchTimezone(new Date(year, 3, findFirstOfMonth(year, 3, 0), 2, 0, 0, 0), this.baseUTCOffset + this.DSTDirection);
    }

    function getTrollDSTStart(year, month, day) {
        var cest = new Date(Date.UTC(year, 2, findLastOfMonth(year, 2, 0), 1, 0, 0, 0));
        if (cest > new Date(year, month, day)) {
            //noinspection JSUnresolvedVariable
            this.DSTDirection = +1;
            return new Date(Date.UTC(year, 2, 1, 1, 0, 0, 0));
        }
        //noinspection JSUnresolvedVariable
        this.DSTDirection = +2;
        return cest;
    }

    function getTrollDSTEnd(year, month, day) {
        var cest = new Date(Date.UTC(year, 9, findLastOfMonth(year, 9, 0), 1, 0, 0, 0));
        if (cest < new Date(year, month, day)) {
            return new Date(Date.UTC(year, 10, 7, 1, 0, 0, 0));
        }
        return cest;
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