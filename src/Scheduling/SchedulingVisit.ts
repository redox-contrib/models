import type { Equipment, Diagnosis, Provider, Staff, Visit } from '../common';

export interface SchedulingVisit extends Visit {
  AdditionalStaff?: Staff[];
  Diagnoses?: Diagnosis[];
  Equipment?: Equipment[];
  Status?: string | null;
  Type?: string | null;
  VisitProvider?: Provider;
}
