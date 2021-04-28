import type { Address } from './Address';
import type { PhoneNumber } from './PhoneNumber';
import type { Sex } from './Sex';

export interface Demographics {
  FirstName?: string | null;
  MiddleName?: string | null;
  LastName?: string | null;
  DOB?: string | null;
  SSN?: string | null;
  Sex?: Sex | null;
  Race?: 'American Indian or Alaska Native' | 'Asian' | 'Black or African American' | 'Native Hawaiian or Other Pacific Islander' | 'Other Race' | 'Unknown' | 'White' | null;
  IsHispanic?: boolean | null;
  MaritalStatus?:
    | 'Annulled'
    | 'Common law'
    | 'Divorced'
    | 'Domestic partner'
    | 'Interlocutory'
    | 'Legally Separated'
    | 'Living together'
    | 'Married'
    | 'Other'
    | 'Registered domestic partner'
    | 'Separated'
    | 'Single'
    | 'Unknown'
    | 'Unmarried'
    | 'Unreported'
    | 'Widowed'
    | null;
  IsDeceased?: boolean | null;
  DeathDateTime?: string | null;
  PhoneNumber?: PhoneNumber;
  EmailAddresses?: string[];
  Language?: string | null;
  Citizenship?: string[];
  Address?: Address;
}
