import WeatherCurrent from "./WeatherCurrent";
import WeatherTempeture from "./WeatherTempeture";

export default class WeatherForecast extends WeatherCurrent {
    constructor (
        public weatherCondition: string = '',
        public description: string = '',
        public icon: string = '',
        public dt: number = 0,
        public sunrise: number = 0,
        public sunset: number = 0,
        public tempForecast: WeatherTempeture = new WeatherTempeture(),
        public feelsLikeForecast: WeatherTempeture = new WeatherTempeture(),
        public pressure: number = 0,
        public humidity: number = 0,
        public clouds: number = 0,
        public uvi: number = 0,
        public windSpeed: number = 0,
    ) {
        super(
            weatherCondition, description, icon, dt, sunrise, sunset, pressure, humidity, clouds, uvi, windSpeed
        );
    }
}