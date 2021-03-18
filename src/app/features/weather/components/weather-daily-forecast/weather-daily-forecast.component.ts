import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import Weather from '../../models/Weather';

@Component({
  selector: 'app-weather-daily-forecast',
  templateUrl: './weather-daily-forecast.component.html',
  styleUrls: ['./weather-daily-forecast.component.css']
})
export class WeatherDailyForecastComponent implements OnInit {
  @Input() weather: Weather = new Weather();

  public dateFormat: string = 'EEE, MMM d, YYYY';

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.observeMobileBreakpoint();
  }

  private observeMobileBreakpoint(): void {
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.dateFormat = 'EEEE';
        }
      });
  }
}
