import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { RequestAguilaService } from 'src/app/services/request-aguila.service';
import { Trip } from 'src/app/entities/trip.entity';
import { Location } from 'src/app/entities/location.entity';

declare const google;

@Component({
  selector: 'app-request-aguila',
  templateUrl: './request-aguila.component.html',
  styleUrls: ['./request-aguila.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestAguilaComponent implements OnInit, OnDestroy {

  public favoriteTrips: Trip[] = [];
  public currentTrip: Trip[] = [];
  public currentCenterLocation: Location;
  public showTrips = true;

  private subscriptions: Subscription[] = [];

  constructor(
    private requestService: RequestAguilaService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.requestService.favoriteTrips$.subscribe(data => {
        this.favoriteTrips = data;
        this.cdr.detectChanges();
      })
    );
    this.subscriptions.push(
      this.requestService.currentTrip$.subscribe(data => {
        this.currentTrip = data;
        this.cdr.detectChanges();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => !!s && s.unsubscribe());
  }

  public selectTrip(trip: Trip): void {
    this.currentTrip.push(trip);
    this.selectStop(this.currentTrip.length - 1);
    this.cdr.markForCheck();
  }

  public selectStop(i: number): void {
    this.currentCenterLocation = this.currentTrip[i] ? this.currentTrip[i].location : null;
  }

  public toggleShowTrips(): void {
    this.showTrips = !this.showTrips;
  }

  get tripLocations(): Location[] {
    return this.currentTrip.map(trip => trip.location);
  }
}
