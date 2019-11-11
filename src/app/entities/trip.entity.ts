import { Location } from './location.entity';

export interface Trip {
  name: string;
  address: string;
  location: Location;
}
