import type { Meta } from '..';

import type { PatientAdminPatient } from './PatientAdminPatient';

export interface NewPatientMeta extends Meta {
  DataModel: 'PatientAdmin';
  EventType: 'NewPatient';
}

export interface NewPatient {
  Meta: NewPatientMeta;
  Patient: PatientAdminPatient;
}
