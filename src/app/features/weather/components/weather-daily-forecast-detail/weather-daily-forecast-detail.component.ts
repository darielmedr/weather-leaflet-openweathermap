import { Component, Input, OnInit } from '@angular/core';
import WeatherForecast from '../../models/WeatherForecast';

@Component({
  selector: 'app-weather-daily-forecast-detail',
  templateUrl: './weather-daily-forecast-detail.component.html',
  styleUrls: ['./weather-daily-forecast-detail.component.css']
})
export class WeatherDailyForecastDetailComponent implements OnInit {
  @Input() daily: WeatherForecast = new WeatherForecast();

  constructor() { }

  ngOnInit(): void {
  }
}
