import type { Address } from './Address';
import type { ProviderLocation } from './ProviderLocation';

export interface VisitLocation extends ProviderLocation {
  Address?: Address;
  Bed?: string | null;
}
