import { Component, OnInit } from '@angular/core';
import { WebServiceClient } from '../../services/webServerClient';

@Component({
  selector: 'app-device-location-map',
  templateUrl: './device-location-map.component.html',
  styleUrls: ['./device-location-map.component.css']
})
export class DeviceLocationMapComponent {
    lat: number = 51.678418;
    lng: number = 7.809007;

  collections: any = []
  temperatureData: any = [];
//   doughnutChartData: number[] = [];
//   doughnutChartLabels: string[] = [];
//   doughnutChartType: string = 'doughnut';
  locationName: string[] = [];
  temperatureUOM: string[] = [];
  temperatureLevel: number[] = [];
  humidityLevel: number[] = [];
  ingestionTime: string[] = [];
  locationLng: number[] = [];
  locationLat: number[] = [];
  locationLongLat: object[] = [];
  deviceId: string[] = [];

  hasData = false;

  constructor( private ws: WebServiceClient) {
    this.ws.getAssetResource('../../../assets/deviceTelemetry.json')
      .subscribe(data => {
        this.temperatureData = data;
        for (let i = 0; i < this.temperatureData.length; i++) {
          this.locationLng[i] = this.temperatureData[i].Longitude;
          this.locationLat[i] = this.temperatureData[i].Latitude;
        }
        this.hasData = true;
      }
    );

   }

   
 
  // events
//   public chartClicked(e:any):void {
//     console.log(e);
//   }
 
//   public chartHovered(e:any):void {
//     console.log(e);
//   }
 
}
