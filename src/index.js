"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAirlines = exports.getAirports = void 0;
var airports_1 = require("./airports");
var airlines_1 = require("./airlines");
var getAirports = function () {
    return airports_1.airportsData;
};
exports.getAirports = getAirports;
var getAirlines = function () {
    return airlines_1.airlinesData;
};
exports.getAirlines = getAirlines;
