export type StationTypeName =
  | 'STOPTREIN'
  | 'STOPTREIN_KNOOPPUNT'
  | 'SNELTREIN'
  | 'SNELTREIN_KNOOPPUNT'
  | 'INTERCITY'
  | 'INTERCITY_KNOOPPUNT'
  | 'MEGA'
  | 'FACULTATIEF';

export interface StationType {
  type: StationTypeName;
  code: number;
  knooppunt: boolean;
}

export interface Station {
  naam: string;
  code: string;
  xCoordinaat: number;
  yCoordinaat: number;
  stationType: StationType;
  landCode: 'NL' | 'D';
}

export interface JsonBinMetadata {
  id: string;
  private: boolean;
  createdAt: string;
  name: string;
}

export interface StationsResponse {
  record: Station[];
  metadata: JsonBinMetadata;
}
