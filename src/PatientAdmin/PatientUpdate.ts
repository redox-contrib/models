import type { Meta } from '..';

import type { PatientAdminPatient } from './PatientAdminPatient';

export interface PatientUpdateMeta extends Meta {
  DataModel: 'PatientAdmin';
  EventType: 'PatientUpdate';
}

export interface PatientUpdate {
  Meta: PatientUpdateMeta;
  Patient: PatientAdminPatient;
}
