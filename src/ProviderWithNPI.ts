import type { Provider } from './Provider';

export interface ProviderWithNPI extends Provider {
  NPI?: string | null;
}
