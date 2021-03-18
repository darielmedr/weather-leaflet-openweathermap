import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Coords from '../../models/Coords';
import LocationAddress from '../../models/LocationAddress';

@Injectable()
export class ReverseGeocodingService {
  private apiUri: string;
  private limit: number = 1;
  private apiKey: string = environment.openWeatherMapApiKey;

  constructor(private http: HttpClient) {
    this.apiUri = 'https://api.openweathermap.org/geo/1.0/reverse?';
  }

  public getAddressByGeocode(lat: number, lon: number): Observable<LocationAddress> {
    const url: string = `${this.apiUri}lat=${lat}&lon=${lon}&limit=${this.limit}&appid=${this.apiKey}`;
    return this.http.get<LocationAddress>(url).pipe(
      map((location: any) => new LocationAddress(
          location[0].name,
          location[0].country,
          new Coords(location[0].lat, location[0].lon)
        )
      )
    );
  }
}
