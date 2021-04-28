import type { Guarantor, Provider, Visit, Insurance } from '../common';

export interface PatientAdminVisit extends Visit {
  AdmittingProvider?: Provider;
  Balance?: number | null;
  DiagnosisRelatedGroup?: number | null;
  DiagnosisRelatedGroupType?: number | null;
  Guarantor?: Guarantor;
  Insurances?: Insurance[];
}
