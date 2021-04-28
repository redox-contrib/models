import type { Address } from './Address';

export interface Producer {
  ID?: string | null;
  IDType?: string | null;
  Name?: string | null;
  Address?: Address;
}
