import { formatDate } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import Weather from '../../models/Weather';
import WeatherCurrent from '../../models/WeatherCurrent';
import { TempetureConverterPipe } from '../../pipes/tempeture-converter.pipe';

@Component({
  selector: 'app-weather-hourly-line-chart',
  templateUrl: './weather-hourly-line-chart.component.html',
  styleUrls: ['./weather-hourly-line-chart.component.css']
})
export class WeatherHourlyLineChartComponent implements OnInit, OnChanges {
  @Input() weather: Weather = new Weather();

  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: ' rgb(0,0,255)',
      backgroundColor: 'rgba(0,0,255,0.3)',
    },
    {
      borderColor: ' rgb(255,0,0)',
      backgroundColor: 'rgba(255,0,0,0.3)',
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private tempetureConverter: TempetureConverterPipe) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change: SimpleChange = changes['weather'];
    if (!change.isFirstChange()) {
      this.setValues();
    }
  }

  private setValues(): void {
    this.setLineChartLabes();
    this.setLineChartData();
  }
  private setLineChartLabes(): void {
    const labels: Array<string> = new Array<string>();
    this.weather.hourly.map((hourlyWeather: WeatherCurrent) => labels.push(formatDate(hourlyWeather.dt, 'h a', 'en-US')));
    this.lineChartLabels = labels;
  }
  private setLineChartData(): void {
    const chartDataSets: Array<ChartDataSets> = new Array<ChartDataSets>();
    const tempetureCelsius: Array<number> = new Array<number>();
    const tempetureFahrenheit: Array<number | string> = new Array<number | string>();

    this.weather.hourly.forEach((hourlyWeather: WeatherCurrent) => {
      const tempCelsius: number = hourlyWeather.temp;
      const tempFahrenheit: string = this.tempetureConverter.transform(tempCelsius, 'C-F')
      tempetureCelsius.push(tempCelsius);
      tempetureFahrenheit.push(tempFahrenheit);
    });

    const chartDataSetTempCelsius: any = {
      data: tempetureCelsius,
      label: 'Tempeture °C'
    };
    const chartDataSetTempFahrenheit: any = {
      data: tempetureFahrenheit,
      label: 'Tempeture °F'
    };

    chartDataSets.push(chartDataSetTempCelsius);
    chartDataSets.push(chartDataSetTempFahrenheit);
    this.lineChartData = chartDataSets;
  }
}
