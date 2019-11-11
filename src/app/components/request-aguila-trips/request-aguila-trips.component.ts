import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Trip } from 'src/app/entities/trip.entity';

@Component({
  selector: 'app-request-aguila-trips',
  templateUrl: './request-aguila-trips.component.html',
  styleUrls: ['./request-aguila-trips.component.sass']
})
export class RequestAguilaTripsComponent {

  @Input() favoriteTrips: Trip[];
  @Input() selectedTrips: Trip[];
  @Output() selectTrip: EventEmitter<Trip> = new EventEmitter();

}
