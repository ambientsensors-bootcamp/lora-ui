import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { DevicesComponent } from './component/devices/devices.component';
import { ConnectionsComponent } from './component/connections/connections.component';
import { LocationMapComponent } from './component/location-map/location-map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DevicesComponent,
    ConnectionsComponent,
    LocationMapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
