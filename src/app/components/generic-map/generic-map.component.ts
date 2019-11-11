import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

import { Location } from 'src/app/entities/location.entity';

declare const google;

@Component({
  selector: 'app-generic-map',
  templateUrl: './generic-map.component.html',
  styleUrls: ['./generic-map.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericMapComponent implements OnInit, OnChanges {

  @ViewChild('map', { static: true }) mapRef: ElementRef;
  @Input() locations: Location[];
  @Input() centerLocation: Location;

  public map: any;
  public markers: any[];

  constructor() { }

  ngOnInit(): void {
    this.map = new google.maps.Map(this.mapRef.nativeElement, {
      zoom: 12,
      center: { lat: 4.680130, lng: -74.141273 },
      disableDefaultUI: true
    });
  }

  ngOnChanges(): void {
    if (!!this.locations) {
      this.markers = this.locations.map(location => new google.maps.Marker({ position: location }));
      this.markers.forEach(marker => marker.setMap(this.map));
    }
    if (!!this.centerLocation) {
      this.map.setCenter(this.centerLocation);
    }
  }

}
