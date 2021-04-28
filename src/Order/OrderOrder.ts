import type { Order, ClinicalInfo, Diagnosis } from '../common';

export interface OrderOrder extends Order {
  ClinicalInfo?: ClinicalInfo[];
  Comments?: string | null;
  Diagnoses?: Diagnosis[];
  Expiration?: string | null;
  Status?: 'Cancel' | 'New' | 'Update' | null;
}
