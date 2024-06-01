import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MapTokenResponse } from '../models/mapToken';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// import { Environment } from '../environments/environment';

const URL = 'https://api.weatherbit.io/v2.0/forecast/daily?';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  constructor(private readonly httpClientService: HttpClient) { }

  fetchData(cityName: string) {
    return this.httpClientService.get(`${URL}&city=${cityName}&key=9648206c9ec9470897af21e4d30068ad&include=minutely`);

  }
}
