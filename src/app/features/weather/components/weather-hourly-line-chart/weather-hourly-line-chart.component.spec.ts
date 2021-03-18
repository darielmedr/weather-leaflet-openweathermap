import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHourlyLineChartComponent } from './weather-hourly-line-chart.component';

describe('WeatherHourlyLineChartComponent', () => {
  let component: WeatherHourlyLineChartComponent;
  let fixture: ComponentFixture<WeatherHourlyLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherHourlyLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHourlyLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
