import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UnitWeatherAPIStrings } from 'src/app/shared/types/UnitWeatherAPIStrings';
import { environment } from 'src/environments/environment';
import Coords from '../../models/Coords';
import Weather from '../../models/Weather';
import WeatherCurrent from '../../models/WeatherCurrent';
import WeatherForecast from '../../models/WeatherForecast';
import WeatherTempeture from '../../models/WeatherTempeture';

@Injectable()
export class WeatherService {
  private apiUri: string;
  private apiKEY: string = environment.openWeatherMapApiKey;
  private apiUnits: string = 'metric';
  private exclude: string = 'minutely';

  constructor(private http: HttpClient) {
    this.apiUri = `https://api.openweathermap.org/data/2.5/onecall?&exclude=${this.exclude}&appid=${this.apiKEY}`;
  }

  public getWeatherByGeocode(lat: number, lon: number, units?: UnitWeatherAPIStrings): Observable<Weather> {
    units ? (this.apiUnits = units) : (this.apiUnits = 'metric');
    const url: string = `${this.apiUri}&units=${this.apiUnits}&lat=${lat}&lon=${lon}`;
    return this.http.get<Weather>(url).pipe(
      map((weatherObjFromApi: any) => new Weather(
        new Coords(weatherObjFromApi.lat, weatherObjFromApi.lon),
        new WeatherCurrent(
          weatherObjFromApi.current.weather[0].main,
          weatherObjFromApi.current.weather[0].description,
          weatherObjFromApi.current.weather[0].icon,
          weatherObjFromApi.current.dt * 1000,            // convert unix UTC miliseconds to seconds
          weatherObjFromApi.current.sunrise * 1000,       // convert unix UTC miliseconds to seconds
          weatherObjFromApi.current.sunset * 1000,        // convert unix UTC miliseconds to seconds
          weatherObjFromApi.current.temp,
          weatherObjFromApi.current.feels_like,
          weatherObjFromApi.current.pressure,
          weatherObjFromApi.current.humidity,
          weatherObjFromApi.current.clouds,
          weatherObjFromApi.current.uvi,
          weatherObjFromApi.current.wind_speed
        ),
        weatherObjFromApi['hourly'].map((hourly: any) => new WeatherCurrent(
          hourly.weather[0].main,
          hourly.weather[0].description,
          hourly.weather[0].icon,
          hourly.dt * 1000,            // convert unix UTC miliseconds to seconds
          hourly.sunrise * 1000,   // convert unix UTC miliseconds to seconds
          hourly.sunset * 1000,    // convert unix UTC miliseconds to seconds
          hourly.temp,
          hourly.feels_like,
          hourly.pressure,
          hourly.humidity,
          hourly.clouds,
          hourly.uvi,
          hourly.wind_speed
        )),
        weatherObjFromApi['daily'].map((daily: any) => new WeatherForecast(
          daily.weather[0].main,
          daily.weather[0].description,
          daily.weather[0].icon,
          daily.dt * 1000,            // convert unix UTC miliseconds to seconds
          daily.sunrise * 1000,   // convert unix UTC miliseconds to seconds
          daily.sunset * 1000,    // convert unix UTC miliseconds to seconds
          new WeatherTempeture(
            daily.temp.day,
            daily.temp.night,
            daily.temp.eve,
            daily.temp.morn,
            daily.temp.min,
            daily.temp.max)
          ,
          new WeatherTempeture(
            daily.feels_like.day,
            daily.feels_like.night,
            daily.feels_like.eve,
            daily.feels_like.morn)
          ,
          daily.pressure,
          daily.humidity,
          daily.clouds,
          daily.uvi,
          daily.wind_speed
        ))
      )
      ));
  }
}