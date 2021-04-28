import type { Address } from './Address';
import type { PhoneNumber } from './PhoneNumber';

export interface Contact {
  FirstName?: string | null;
  MiddleName?: string | null;
  LastName?: string | null;
  Address?: Address;
  PhoneNumber?: PhoneNumber;
  RelationToPatient?: 'Child' | 'Employer' | 'Father' | 'Grandchild' | 'Grandparent' | 'Life Partner' | 'Mother' | 'Other' | 'Parent' | 'Self' | 'Sibling' | 'Spouse' | 'Unknown' | null;
  EmailAddresses?: string[];
  Roles?: string[];
}
