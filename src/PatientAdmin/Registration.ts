import type { Meta } from '../common';

import type { PatientAdminPatient } from './PatientAdminPatient';
import type { PatientAdminVisit } from './PatientAdminVisit';

export interface RegistrationMeta extends Meta {
  DataModel: 'PatientAdmin';
  EventType: 'Registration';
}

export interface Registration {
  Meta: RegistrationMeta;
  Patient: PatientAdminPatient;
  Visit?: PatientAdminVisit;
}
