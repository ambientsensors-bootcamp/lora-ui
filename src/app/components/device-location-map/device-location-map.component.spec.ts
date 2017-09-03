import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceLocationMapComponent } from './device-location-map.component';


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
