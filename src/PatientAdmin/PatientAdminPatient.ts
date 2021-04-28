import type { Allergy, Contact, Diagnosis, Patient, ProviderWithNPI } from '../common';

export interface PatientAdminPatient extends Patient {
  Allergies?: Allergy[];
  Contacts?: Contact[];
  Diagnoses?: Diagnosis[];
  PCP?: ProviderWithNPI[];
}
