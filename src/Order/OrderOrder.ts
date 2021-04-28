import type { Order, ClinicalInfo, Diagnosis } from '..';

export interface OrderOrder extends Order {
  ClinicalInfo?: ClinicalInfo[];
  Comments?: string | null;
  Diagnoses?: Diagnosis[];
  Expiration?: string | null;
  Status?: 'Cancel' | 'New' | 'Update' | null;
}
