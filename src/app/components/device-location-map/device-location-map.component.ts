import { Component, OnInit } from '@angular/core';
import { WebServiceClient } from '../../services/webServerClient';
// import { InfoWindowOptions } from 'google.maps.InfoWindowOptions';


@Component({
    selector: 'app-device-location-map',
    templateUrl: './device-location-map.component.html',
    styleUrls: ['./device-location-map.component.css']
})
export class DeviceLocationMapComponent {
    // this is the center of the map
    // ideally, we'd figure out the center based on the data received in deviceTelemetry
    zoom: number = 15;
    lat: number = 43.610245;
    lng: number = -116.218883;

    collections: any = []
    temperatureData: any = [];
    locationName: string[] = [];
    temperatureUOM: string[] = [];          // eg. "f" stands for farenheit
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
                if (!isNaN(this.temperatureData[i].Location.Longitude) && !isNaN(this.temperatureData[i].Location.Latitude)) {
                    this.temperatureUOM[i] = this.temperatureData[i].Location.temperatureUOM;

                    // if (this.temperatureUOM[i] == "f") { // at some point we should check what the units of measure are
                        this.locationLng[i] = this.temperatureData[i].Location.Longitude;
                        this.locationLat[i] = this.temperatureData[i].Location.Latitude;
                    // }
                }
            }
            this.hasData = true;
        });


        // var infoWindow = new SnazzyInfoWindow({
        //     marker: marker,
        //     content: 'Snazzy!'
        //  });
    //     InfoWindowOptions infoOptions = new InfoWindowOptions();
    }





    // InfoWindow(opts?:InfoWindowOptions) {

    // }

        // var infowindow = new google.maps.InfoWindow({
        //     content: contentString
        // });


    events
    public chartClicked(e:any):void {
        console.log(e);
    }
 
    public chartHovered(e:any):void {
        console.log(e);
    }
 
    clickedMarker(Name: string, index: number, Temperature: number, TemperatureUOM: string, Humidity: number) {
        console.log(`clicked the temperatureData: ${Name || index}`)
        alert("Location: " + Name 
            + "\nTemperature: " + Temperature + " °" + TemperatureUOM.toUpperCase()
            + "\nHumidity: " + Humidity
        );
    }

    mapClicked($event: any) {
        this.temperatureData.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng
        });
    }
}

