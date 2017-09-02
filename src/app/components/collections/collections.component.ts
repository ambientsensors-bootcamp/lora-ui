import { Component, OnInit } from '@angular/core';
import { WebServiceClient } from '../../services/webServerClient';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent {

  collections: any= []

  constructor( private ws: WebServiceClient) {
    this.ws.getAssetResource('../../../assets/deviceTelemetry.json')
      .subscribe(data=>console.log(data));
   }

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

  public dataThing: string = './deviceTelemetry.json';
  

  public toJSObject(data: string) {
    return JSON.parse(data);
  }

  public temperatureData = this.ws.getAssetResource('../../../assets/deviceTelemetry.json');
  // temperatureData = JSON.parse(this.temperatureData);

  // for (i = 0; i < temperatureData.length; i++) {
  //   public doughnutChartData:number[i] = temperatureData[i].Readings.Temperature;
  // }

  // public temperatureData = this.toJSObject('');

  // public temperatureData = JSON.parse()

  // function readTextFile(file, callback) {
  //   var rawFile = new XMLHttpRequest();
  //   rawFile.overrideMimeType("application/json");
  //   rawFile.open("GET", file, true);
  //   rawFile.onreadystatechange = function() {
  //       if (rawFile.readyState === 4 && rawFile.status == "200") {
  //           callback(rawFile.responseText);
  //       }
  //   }
  //   rawFile.send(null);

  //   //usage:
  //   readTextFile('../../../assets/deviceTelemetry.json', function(text){
  //     var data = JSON.parse(text);
  //     console.log(data);
  //   });

}
