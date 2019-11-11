import { Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';

import { Trip } from 'src/app/entities/trip.entity';

@Component({
  selector: 'app-request-aguila-trips',
  templateUrl: './request-aguila-trips.component.html',
  styleUrls: ['./request-aguila-trips.component.sass']
})
export class RequestAguilaTripsComponent implements OnChanges {

  private currentIndexStopSelected = 0;

  @Input() favoriteTrips: Trip[];
  @Input() selectedTrips: Trip[];
  @Output() selectTrip: EventEmitter<Trip> = new EventEmitter();
  @Output() selectStop: EventEmitter<number> = new EventEmitter();
  @Output() toggleShowTrips: EventEmitter<void> = new EventEmitter();

  ngOnChanges(): void {
    if (this.selectedTrips) {
      this.currentIndexStopSelected = this.selectedTrips.length - 1;
    }
  }

  public isCurrentStopSelected(i: number): boolean {
    return this.currentIndexStopSelected === i;
  }

  public selectCurrentStop(i: number): void {
    this.selectStop.emit(i);
    this.currentIndexStopSelected = i;
  }

  public selectCurrentTrip(trip: Trip): void {
    if (!this.selectedTrips.find(t => t.name === trip.name)) {
      this.selectTrip.emit(trip);
      this.currentIndexStopSelected = this.selectedTrips.length - 1;
    } else {
      this.currentIndexStopSelected = this.selectedTrips.length - 1;
    }
  }

}
