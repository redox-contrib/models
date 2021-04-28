import type { Meta } from '../common';

import type { PatientAdminPatient } from './PatientAdminPatient';

export interface NewPatientMeta extends Meta {
  DataModel: 'PatientAdmin';
  EventType: 'NewPatient';
}

export interface NewPatient {
  Meta: NewPatientMeta;
  Patient: PatientAdminPatient;
}
