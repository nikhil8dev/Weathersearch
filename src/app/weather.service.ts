import { Injectable } from '@angular/core';
import {  HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URL = 'http://api.openweathermap.org/data/2.5/weather';
  apikey=  'd94a47a324f81cdd0b1bb78e05dfc831';
  posts:any;
  constructor(private http:HttpClient) { }

   getWeathereDataByCoords(lat, lon){
     let params = new HttpParams()
     .set('lat',lat)
     .set('lon',lon)

     .set('appid',this.apikey)

     return this.http.get(this.URL,{params})
   }


   getWeatherDataByCityName(city:string){
     let params = new HttpParams()
     .set('q',city)
     .set('units','imperial')
     .set('appid',this.apikey)

     return this.http.get(this.URL,{params});
   }
}
