"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAirlines = exports.getAirports = void 0;
var airports_1 = require("./airports");
var getAirports = function () {
    return airports_1.airportsData;
};
exports.getAirports = getAirports;
var getAirlines = function () {
    return [
        { "name": "SAA" }
    ];
};
exports.getAirlines = getAirlines;
