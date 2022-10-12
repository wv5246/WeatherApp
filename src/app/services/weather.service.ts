import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { WeatherData } from './models/weather.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  weatherData?:WeatherData;
  getWeatherData(cityName: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.
      XRapidAPIHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.
      XRapidAPIHeaderValue),
      params: new HttpParams()
      .set('city', cityName)
    })
  }
}
