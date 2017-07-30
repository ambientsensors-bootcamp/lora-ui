import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebServiceClient } from './services/webServerClient';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { CollectionsComponent } from './components/collections/collections.component';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CollectionsComponent,
    BarChartComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [WebServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
