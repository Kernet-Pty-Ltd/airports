import { AirportType } from "./models";
import * as airportData from "./airport.json";

const data: AirportType[] = airportData;

const getAirports = () => {
    return data;
}

export { getAirports };
