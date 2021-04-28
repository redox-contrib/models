import type { Guarantor, Insurance, Visit } from '../common';

export interface OrderVisit extends Pick<Visit, 'AccountNumber' | 'AttendingProvider' | 'ConsultingProvider' | 'Location' | 'PatientClass' | 'ReferringProvider' | 'VisitDateTime' | 'VisitNumber'> {
  Guarantor?: Guarantor;
  Insurances?: Insurance[];
}
