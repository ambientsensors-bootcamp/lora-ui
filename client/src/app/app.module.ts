import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebServiceClient } from './services/webServerClient';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { CollectionsComponent } from './components/collections/collections.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CollectionsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [WebServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
