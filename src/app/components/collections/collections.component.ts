import { Component, OnInit } from '@angular/core';
import { WebServiceClient } from '../../services/webServerClient';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent {

  collections: any= []

  constructor( private ws: WebServiceClient) { }

  // Doughnut
  public doughnutChartLabels:string[] = ['Downloads', 'Data', 'Services', 'Bigger Number'];
  public doughnutChartData:number[] = [350, 450, 100, 700];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  // public dataThing: string = './deviceTelemetry.json';

  public toJSObject(data: string) {
    return JSON.parse(data);
  }

  public temperatureData = this.toJSObject('./deviceTelemetry.json');

}
