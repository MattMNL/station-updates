import { httpResource } from '@angular/common/http';
import { Service } from '@angular/core';
import { StationsResponse, Station } from './stations.model';

const STATIONS_URL = 'https://api.jsonbin.io/v3/b/68f0f147d0ea881f40a6513b';

@Service()
export class StationsService {
  getStations() {
    return httpResource<StationsResponse>(() => STATIONS_URL);
  }

  getStationByCode(stationCode: () => string | undefined) {
    return httpResource<Station | undefined>(
      () => {
        return STATIONS_URL;
      },
      {
        parse: (stations) =>
          (stations as StationsResponse).record.find((s) => s.code === stationCode()),
      },
    );
  }
}
