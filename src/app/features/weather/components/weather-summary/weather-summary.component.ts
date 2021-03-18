import { Component, Input, OnInit } from '@angular/core';
import LocationAddress from '../../models/LocationAddress';
import Weather from '../../models/Weather';

@Component({
  selector: 'app-weather-summary',
  templateUrl: './weather-summary.component.html',
  styleUrls: ['./weather-summary.component.css']
})
export class WeatherSummaryComponent implements OnInit {
  @Input() weather: Weather = new Weather();
  @Input() locationAddress: LocationAddress = new LocationAddress();

  constructor() { }

  ngOnInit(): void {
  }

}
