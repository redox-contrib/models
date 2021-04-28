import type { Meta } from '..';

import type { PatientAdminPatient } from './PatientAdminPatient';
import type { PatientAdminVisit } from './PatientAdminVisit';

export interface VisitUpdateMeta extends Meta {
  DataModel: 'PatientAdmin';
  EventType: 'VisitUpdate';
}

export interface VisitUpdateVisit extends PatientAdminVisit {
  DischargeDateTime?: string | null;
}

export interface VisitUpdate {
  Meta: VisitUpdateMeta;
  Patient: PatientAdminPatient;
  Visit?: VisitUpdateVisit;
}
