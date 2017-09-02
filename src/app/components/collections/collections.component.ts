import { Component, OnInit } from '@angular/core';
import { WebServiceClient } from '../../services/webServerClient';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent {

  collections: any = []
  temperatureData: any = [];
  doughnutChartData: number[] = [];
  doughnutChartLabels: string[] = [];
  doughnutChartType: string = 'doughnut';
  locationName: string[] = [];
  temperatureUOM: string[] = [];
  temperatureLevel: number[] = [];
  humidityLevel: number[] = [];
  ingestionTime: string[] = [];
  locationLong: number[] = [];
  locationLat: number[] = [];
  locationLongLat: object[] = [];
  deviceId: string[] = [];

  hasData = false;

  constructor( private ws: WebServiceClient) {
    this.ws.getAssetResource('../../../assets/deviceTelemetry.json')
      .subscribe(data => {
        this.temperatureData = data;
        for (let i = 0; i < this.temperatureData.length; i++) {
          this.doughnutChartData[i] = this.temperatureData[i].Readings.Temperature;
          this.doughnutChartLabels[i] = this.temperatureData[i].Name;
        }
        this.hasData = true;
      }
    );

   }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
}
