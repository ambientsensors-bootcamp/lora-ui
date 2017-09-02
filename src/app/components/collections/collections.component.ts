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
  doughnutChartLabels: string[] = ['e1'];
  doughnutChartType: string = 'doughnut';
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
