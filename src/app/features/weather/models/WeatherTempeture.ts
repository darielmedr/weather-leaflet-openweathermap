export default class WeatherTempeture {
    public get day(): number {
        return this._day;
    }
    public get night(): number {
        return this._night;
    }
    public get evening(): number {
        return this._evening;
    }
    public get morning(): number {
        return this._morning;
    }
    public get min(): number {
        return this._min;
    }
    public get max(): number {
        return this._max;
    }
    constructor (
        private _day: number = 0,
        private _night: number = 0,
        private _evening: number = 0,
        private _morning: number = 0,
        private _min: number = 0,
        private _max: number = 0,
    ) {}
}