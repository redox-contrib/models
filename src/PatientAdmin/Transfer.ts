import type { DischargeStatus, Meta, VisitLocation } from '..';

import type { PatientAdminPatient } from './PatientAdminPatient';
import type { PatientAdminVisit } from './PatientAdminVisit';

export interface TransferMeta extends Meta {
  DataModel: 'PatientAdmin';
  EventType: 'Transfer';
}

export interface TransferVisit extends PatientAdminVisit {
  PreviousLocation?: VisitLocation;
  DischargeDateTime?: string | null;
  DischargeStatus?: DischargeStatus;
}

export interface Transfer {
  Meta: TransferMeta;
  Patient: PatientAdminPatient;
  Visit?: TransferVisit;
}
