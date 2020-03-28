import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { AppRoutingModule, } from './app-routing.module';

import { AgmCoreModule } from '@agm/core';

import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
    apiKey:'' 
    }),
    MatSliderModule,
    MatSidenavModule,
   
  ],
  providers: [ WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
