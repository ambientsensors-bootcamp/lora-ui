import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceLocationMapComponent } from './device-location-map.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.device-location-map.component.html',
  styleUrls: ['./app.device-location-map.component.css']
})
export class AppComponent {
  title = 'LoRa-ui';
  lat: number = 51.678418;
  lng: number = 7.809007;
}


describe('DeviceLocationMapComponent', () => {
  let component: DeviceLocationMapComponent;
  let fixture: ComponentFixture<DeviceLocationMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceLocationMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceLocationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
