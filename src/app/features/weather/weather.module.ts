import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather/weather.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MapComponent } from './components/map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { GeoapifyGeocoderAutocompleteModule } from '@geoapify/angular-geocoder-autocomplete';
import { environment } from 'src/environments/environment';
import { WeatherSummaryComponent } from './components/weather-summary/weather-summary.component';
import { TempetureConverterPipe } from './pipes/tempeture-converter.pipe';
import { ReverseGeocodingService } from './services/reverse-geocoding/reverse-geocoding.service';
import { ChartsModule } from 'ng2-charts';
import { WeatherHourlyLineChartComponent } from './components/weather-hourly-line-chart/weather-hourly-line-chart.component';
import { WeatherDailyForecastComponent } from './components/weather-daily-forecast/weather-daily-forecast.component';
import { WeatherDailyForecastDetailComponent } from './components/weather-daily-forecast-detail/weather-daily-forecast-detail.component';

@NgModule({
  declarations: [WeatherComponent, WeatherDetailComponent, MapComponent, WeatherSummaryComponent, TempetureConverterPipe, WeatherHourlyLineChartComponent, WeatherDailyForecastComponent, WeatherDailyForecastDetailComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    HttpClientModule,
    SharedModule,
    LayoutModule,
    LeafletModule,
    GeoapifyGeocoderAutocompleteModule.withConfig(environment.geoapifyApiKey),
    ChartsModule
  ],
  providers: [
    WeatherService, ReverseGeocodingService, TempetureConverterPipe
  ]
})
export class WeatherModule { }
