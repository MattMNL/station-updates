import { Routes } from '@angular/router';
import { StationsPage } from './stations/stations';
import { StationPage } from './station/station';

export const routes: Routes = [
  { path: '', component: StationsPage },
  { path: 'station/:code', component: StationPage },
];
