import { Component, Input, OnInit } from '@angular/core';
import Weather from '../../models/Weather';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {
  @Input() weather: Weather;

  constructor() {
    this.weather = new Weather();
  }

  ngOnInit(): void {
  }

}
