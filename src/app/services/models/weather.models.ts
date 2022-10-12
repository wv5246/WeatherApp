export interface WeatherData {
  message: string
  stations: Station[]
}

export interface Station {
  CO: number
  NO2: number
  OZONE: number
  PM10: number
  PM25: number
  SO2: number
  city: string
  countryCode: string
  division: string
  lat: number
  lng: number
  placeName: string
  postalCode: string
  state: string
  updatedAt: string
  AQI: number
  aqiInfo: AqiInfo
}

export interface AqiInfo {
  pollutant: string
  concentration: number
  category: string
}
