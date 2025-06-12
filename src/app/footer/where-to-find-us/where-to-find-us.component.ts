import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMapsModule, MapInfoWindow } from '@angular/google-maps';

@Component({
  selector: 'praxis-where-to-find-us',
  templateUrl: './where-to-find-us.component.html',
  styleUrl: './where-to-find-us.component.scss',
  imports: [GoogleMapsModule],
})
export class WhereToFindUsComponent {
  title: string = 'Where to find us';

  display: any;
  zoom = 16;

  center: any;
  location: google.maps.LatLngLiteral = {
    lat: 43.31793960786512,
    lng: 21.893031011453278,
  };

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
