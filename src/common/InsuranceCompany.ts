import type { Address } from './Address';
import type { Identifier } from './Identifier';

export interface InsuranceCompany extends Identifier {
  Name?: string | null;
  PhoneNumber?: string | null;
  Address?: Address;
}
