import type { Guarantor, Insurance, Visit } from '..';

export interface OrderVisit extends Pick<Visit, 'AccountNumber' | 'AttendingProvider' | 'ConsultingProvider' | 'Location' | 'PatientClass' | 'ReferringProvider' | 'VisitDateTime' | 'VisitNumber'> {
  Guarantor?: Guarantor;
  Insurances?: Insurance[];
}
