import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StationsService } from '../stations';
import { StationNoticeForm } from '../station-notice-form/station-notice-form';

@Component({
  imports: [RouterLink, StationNoticeForm],
  selector: 'station',
  styleUrl: './station.scss',
  templateUrl: './station.html',
})
export class StationPage {
  private stationsService = inject(StationsService);

  code = input.required<string>();
  station = this.stationsService.getStationByCode(this.code);
}
