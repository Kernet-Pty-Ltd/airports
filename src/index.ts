import { AirportType } from "./models"

const data: AirportType  [] = [
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

]

const getAirports = ()=> {
  return   data;
}

export  {getAirports}