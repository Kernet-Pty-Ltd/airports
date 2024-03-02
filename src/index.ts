import { AirlineType, AirportType } from "./models";
import { airportsData } from "./airports";
import { airlinesData } from "./airlines";


const getAirports = () => {
  return airportsData;
}

const getAirlines = () => {
  return airlinesData;
}

export { getAirports, getAirlines, AirportType, AirlineType };
