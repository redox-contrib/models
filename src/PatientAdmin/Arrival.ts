import type { Meta } from '..';

import type { PatientAdminPatient } from './PatientAdminPatient';
import type { PatientAdminVisit } from './PatientAdminVisit';

export interface ArrivalMeta extends Meta {
  DataModel: 'PatientAdmin';
  EventType: 'Arrival';
}

export interface Arrival {
  Meta: ArrivalMeta;
  Patient: PatientAdminPatient;
  Visit?: PatientAdminVisit;
}
