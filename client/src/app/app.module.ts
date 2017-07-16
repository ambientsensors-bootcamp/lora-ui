import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { DevicesComponent } from './component/devices/devices.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DevicesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
