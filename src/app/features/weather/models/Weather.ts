import Coords from "./Coords";
import WeatherCurrent from "./WeatherCurrent";
import WeatherForecast from "./WeatherForecast";

export default class Weather {
    constructor (
        public coord: Coords = new Coords(),
        public current: WeatherCurrent = new WeatherCurrent(),
        public hourly: Array<WeatherCurrent> = new Array<WeatherCurrent>(),
        public daily: Array<WeatherForecast> = new Array<WeatherForecast>()
    ) {}
}