import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather/weather.service';
import { GeolocationService } from '@ng-web-apis/geolocation';
import Coords from './models/Coords';
import { take } from 'rxjs/operators';
import Weather from './models/Weather';
import LocationAddress from './models/LocationAddress';
import { ReverseGeocodingService } from './services/reverse-geocoding/reverse-geocoding.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  coords: Coords = new Coords();
  locationAddress: LocationAddress = new LocationAddress();
  weather: Weather = new Weather();

  constructor(private weatherService: WeatherService,
    private geolocation$: GeolocationService,
    private reverseGeocodingService: ReverseGeocodingService) { }

  ngOnInit(): void {
    this.getUserLocation();
  }

  public getUserLocation(): void {
    this.geolocation$.pipe(take(1)).subscribe(
      (position: GeolocationPosition) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.coords = new Coords(lat, lon);
        this.getWeatherByGeocode();
      },
      (err: any) => console.error(err)
    );
  }

  private getWeatherByGeocode(): void {
    this.weatherService.getWeatherByGeocode(this.coords.latitude, this.coords.longitude)
      .subscribe(
        (weather: Weather) => {
          this.weather = weather;
          this.getLocationAddress();
        },
        (err: any) => console.error(err)
      );
  }
  private getLocationAddress(): void {
    this.reverseGeocodingService.getAddressByGeocode(this.coords.latitude, this.coords.longitude)
      .subscribe(
        (locationAddress: LocationAddress) => {
          this.locationAddress = locationAddress;
        },
        (err: any) => console.error(err)
      );
  }

  public updateCoords(coords: Coords): void {
    this.coords.latitude = coords.latitude;
    this.coords.longitude = coords.longitude;
    this.getWeatherByGeocode();
  }

  public placeSelected(data: any): void {
    if (!data) return;

    const lat: number = data.properties.lat;
    const lon: number = data.properties.lon;
    this.coords = new Coords(lat, lon);
    this.getWeatherByGeocode();
  }
}
