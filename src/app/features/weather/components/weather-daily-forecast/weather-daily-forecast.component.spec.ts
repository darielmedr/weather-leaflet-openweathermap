import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDailyForecastComponent } from './weather-daily-forecast.component';

describe('WeatherDailyForecastComponent', () => {
  let component: WeatherDailyForecastComponent;
  let fixture: ComponentFixture<WeatherDailyForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDailyForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDailyForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
