import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare const google;

@Component({
  selector: 'app-generic-map',
  templateUrl: './generic-map.component.html',
  styleUrls: ['./generic-map.component.sass']
})
export class GenericMapComponent implements OnInit {

  @ViewChild('map', { static: true }) mapRef: ElementRef;

  public map: any;

  constructor() { }

  ngOnInit(): void {
    this.map = new google.maps.Map(this.mapRef.nativeElement, {
      zoom: 8,
      center: { lat: 4.680130, lng: -74.141273 },
      disableDefaultUI: true
    });
  }

}
