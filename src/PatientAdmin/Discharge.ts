import type { DischargeStatus, Meta, ProviderLocation } from '..';

import type { PatientAdminPatient } from './PatientAdminPatient';
import type { PatientAdminVisit } from './PatientAdminVisit';

export interface DischargeMeta extends Meta {
  DataModel: 'PatientAdmin';
  EventType: 'Discharge';
}

export interface DischargeVisit extends PatientAdminVisit {
  DischargeDateTime?: string | null;
  DischargeLocation?: ProviderLocation;
  DischargeStatus?: DischargeStatus;
}

export interface Discharge {
  Meta: DischargeMeta;
  Patient: PatientAdminPatient;
  Visit?: DischargeVisit;
}
