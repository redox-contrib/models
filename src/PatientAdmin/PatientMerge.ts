import type { Meta, Identifier } from '..';

import type { PatientAdminPatient } from './PatientAdminPatient';

export interface PatientMergeMeta extends Meta {
  DataModel: 'PatientAdmin';
  EventType: 'PatientMerge';
}

export interface PatientMergePatient extends PatientAdminPatient {
  PreviousIdentifiers: Identifier[];
}

export interface PatientMerge {
  Meta: PatientMergeMeta;
  Patient: PatientMergePatient;
}
