import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../entities/trip.entity';

@Injectable()
export class RequestAguilaService {

  constructor(
    private http: HttpClient
  ) {}

  get favoriteTrips$(): Observable<Trip[]> {
    return this.http.get<Trip[]>('./assets/data/favorite-trips.json');
  }
}
