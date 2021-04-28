import type { Address } from './Address';
import type { Employer } from './Employer';
import type { Relationship } from './Relationship';
import type { Sex } from './Sex';

export interface Guarantor {
  Address?: Address;
  DOB?: string | null;
  EmailAddresses?: string[];
  Employer?: Employer;
  FirstName?: string | null;
  LastName?: string | null;
  MiddleName?: string | null;
  Number?: string | null;
  PhoneNumber?: {
    Business?: string | null;
    Home?: string | null;
    Mobile?: string | null;
  };
  RelationToPatient?: Relationship | null;
  Sex?: Sex | null;
  Spouse?: {
    FirstName?: string | null;
    LastName?: string | null;
  };
  SSN?: string | null;
  Type?: string | null;
}
