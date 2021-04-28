import type { Address } from './Address';
import type { Identifier } from './Identifier';
import type { Relationship } from './Relationship';
import type { Sex } from './Sex';

export interface InsuranceInsured {
  Address?: Address;
  DOB?: string | null;
  FirstName?: string | null;
  Identifiers?: Identifier[];
  LastName?: string | null;
  MiddleName?: string | null;
  Relationship?: Relationship | null;
  Sex?: Sex | null;
  SSN?: string | null;
}
