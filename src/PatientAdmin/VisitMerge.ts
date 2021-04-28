import type { Meta, Patient, Identifier } from '../common';

export interface VisitMergeMeta extends Meta {
  DataModel: 'PatientAdmin';
  EventType: 'VisitMerge';
}

export interface VisitMergePatient extends Patient {
  PreviousIdentifiers?: Identifier[];
}

export interface VisitMergeVisit {
  VisitNumber: string;
}

export interface VisitMerge {
  Meta: VisitMergeMeta;
  Patient: VisitMergePatient;
  Visit: VisitMergeVisit;
}
