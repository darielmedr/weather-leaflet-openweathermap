export default class WeatherCurrent {
    constructor (
        public weatherCondition: string = '',
        public description: string = '',
        public icon: string = '',
        public dt: number = 0,
        public sunrise: number = 0,
        public sunset: number = 0,
        public temp: number = 0,
        public feelsLike: number = 0,
        public pressure: number = 0,
        public humidity: number = 0,
        public clouds: number = 0,
        public uvi: number = 0,
        public windSpeed: number = 0,

    ) {}
}