import { Component, computed, inject, signal } from '@angular/core';
import { StationsService } from '../stations';
import { form, FormField } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormField, RouterLink],
  selector: 'stations',
  styleUrl: './stations.scss',
  templateUrl: './stations.html',
})
export class StationsPage {
  private stationsService = inject(StationsService);
  stations = this.stationsService.getStations();
  allStations = computed(() => (this.stations.hasValue() ? this.stations.value().record : []));

  filterStationsModel = signal({ query: '' });
  filterStationsForm = form(this.filterStationsModel);

  filteredStations = computed(() => {
    const stationSearchQuery = this.normalize(this.filterStationsForm.query().value());
    return stationSearchQuery
      ? this.allStations().filter((station) =>
          this.normalize(station.naam).includes(stationSearchQuery),
        )
      : this.allStations();
  });

  private normalize(strToNormalize: string) {
    return strToNormalize.trim().toLowerCase();
  }
}
