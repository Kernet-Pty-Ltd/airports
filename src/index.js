"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.airports = void 0;
var fs = require("fs");

var jsonData = fs.readFileSync('airport.json', 'utf-8');

var airports = JSON.parse(jsonData);
exports.airports = airports;

console.log(airports);
