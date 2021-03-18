import Coords from "./Coords";

export default class LocationAddress {
    public get city(): string {
        return this._city;
    }
    public get country(): string {
        return this._country;
    }
    public get coords(): Coords {
        return this._coords;
    }

    constructor (
        private _city: string = '',
        private _country: string = '',
        private _coords: Coords = new Coords()
    ) {}
}