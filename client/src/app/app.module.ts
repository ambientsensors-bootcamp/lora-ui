import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { DevicesComponent } from './component/devices/devices.component';
import { ConnectionsComponent } from './component/connections/connections.component';
import { LocationMapComponent } from './component/location-map/location-map.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DevicesComponent,
    ConnectionsComponent,
    LocationMapComponent
  ],
  imports: [
    BrowserModule,MaterialModule , BrowserAnimationsModule, AppRoutingModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
