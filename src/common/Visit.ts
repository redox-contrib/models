import type { Provider } from './Provider';
import type { VisitLocation } from './VisitLocation';

export interface Visit {
  AccountNumber?: string | null;
  AttendingProvider?: Provider;
  ConsultingProvider?: Provider;
  Duration?: number | null;
  Instructions?: string[];
  Location?: VisitLocation;
  PatientClass?: string | null;
  Reason?: string | null;
  ReferringProvider?: Provider;
  VisitDateTime?: string | null;
  VisitNumber?: string | null;
}
