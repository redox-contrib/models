import type { CodeSetDescription } from './CodeSetDescription';
import type { Facility } from './Facility';
import type { Provider } from './Provider';
import type { ProviderWithNPI } from './ProviderWithNPI';
import type { Specimen } from './Specimen';

export interface Order {
  ApplicationOrderID?: string | null;
  CollectionDateTime?: string | null;
  ID: string;
  Notes?: string[];
  OrderingFacility?: Facility;
  Priority?: 'ASAP' | 'Preoperative' | 'Routine' | 'Stat' | 'Timing Critical' | null;
  Procedure?: CodeSetDescription;
  Provider?: ProviderWithNPI;
  ResultCopyProviders?: Provider[];
  Specimen?: Specimen;
  TransactionDateTime?: string | null;
}
