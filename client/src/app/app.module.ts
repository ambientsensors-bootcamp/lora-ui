import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentComponent } from './navigation/component/component.component';
import { NavigationComponent } from './component/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
