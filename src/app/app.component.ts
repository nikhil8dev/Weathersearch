import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lat;
  lon;
  weather;
   constructor(private WS:WeatherService){}
     
    ngOnInit(){
      this.getLocation();

    }

    getLocation(){
      if("geolocation" in navigator){
        navigator.geolocation.watchPosition((success)=>{
         this .lat = success.coords.latitude;
         this .lon = success.coords.longitude;


         this.WS.getWeathereDataByCoords(this.lat,this.lon).subscribe(data=>{
           this.weather = data;

         })
        })
      }
    }

    getCity(city){
      this.WS.getWeatherDataByCityName(city).subscribe((data:any)=>{
        this.weather = data;

        this.lat = data.coord.lat;
        this.lon = data.coord.lon;
      })
    }


    getCoords(event){
      this.lat = event.coord.lat;
      this.lon = event.coords.lon;

      this.WS.getWeathereDataByCoords(this.lat, this.lon).subscribe(data=>{
        this.weather = data
      })
    } 
}

