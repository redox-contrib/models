export interface Meta {
  EventDateTime?: string | null;
  FacilityCode?: string | null;
  Message?: {
    ID?: number | null;
  };
  Test?: boolean | null;
  Source?: {
    ID?: string | null;
    Name?: string | null;
  };
  Destinations?: {
    ID?: string | null;
    Name?: string | null;
  }[];
  Transmission?: {
    ID?: number | null;
  };
}
