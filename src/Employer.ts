import type { Address } from './Address';

export interface Employer {
  Name?: string | null;
  Address?: Address;
  PhoneNumber?: string | null;
}
