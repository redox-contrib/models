import type { Equipment, Diagnosis, Provider, Staff, Visit } from '..';

export interface SchedulingVisit extends Visit {
  AdditionalStaff?: Staff[];
  Diagnoses?: Diagnosis[];
  Equipment?: Equipment[];
  Status?: string | null;
  Type?: string | null;
  VisitProvider?: Provider;
}
