import type { Address } from './Address';
import type { ProviderLocation } from './ProviderLocation';

export interface Provider {
  ID?: string | null;
  IDType?: string | null;
  FirstName?: string | null;
  LastName?: string | null;
  Credentials?: string[];
  Address?: Address;
  EmailAddresses?: string[];
  PhoneNumber?: {
    Office?: string | null;
  };
  Location?: ProviderLocation;
}
