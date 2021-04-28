import type { Meta } from '../common';

import type { PatientAdminPatient } from './PatientAdminPatient';

export interface PatientUpdateMeta extends Meta {
  DataModel: 'PatientAdmin';
  EventType: 'PatientUpdate';
}

export interface PatientUpdate {
  Meta: PatientUpdateMeta;
  Patient: PatientAdminPatient;
}
