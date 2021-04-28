import type { Meta } from '..';

import type { PatientAdminPatient } from './PatientAdminPatient';
import type { PatientAdminVisit } from './PatientAdminVisit';

export interface CancelMeta extends Meta {
  DataModel: 'PatientAdmin';
  EventType: 'Cancel';
  CanceledEvent?: string | null;
}

export interface Cancel {
  Meta: CancelMeta;
  Patient: PatientAdminPatient;
  Visit?: PatientAdminVisit;
}
