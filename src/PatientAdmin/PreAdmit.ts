import type { Meta } from '..';

import type { PatientAdminPatient } from './PatientAdminPatient';
import type { PatientAdminVisit } from './PatientAdminVisit';

export interface PreAdmitMeta extends Meta {
  DataModel: 'PatientAdmin';
  EventType: 'PreAdmit';
}

export interface PreAdmit {
  Meta: PreAdmitMeta;
  Patient: PatientAdminPatient;
  Visit?: PatientAdminVisit;
}
