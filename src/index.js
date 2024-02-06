"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAirports = void 0;
var data = [
    {
        "name": "Hartsfield Jackson Atlanta Intl",
        "city": "Atlanta",
        "country": "United States",
        "iata_code": "ATL",
    },
    {
        "name": "Chicago Ohare Intl",
        "city": "Chicago",
        "country": "United States",
        "iata_code": "ORD",
    },
    {
        "name": "Capital Intl",
        "city": "Beijing",
        "country": "China",
        "iata_code": "PEK",
    }
];
var getAirports = function () {
    return data;
};
exports.getAirports = getAirports;
