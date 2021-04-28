import type { CodeSetDescription } from './CodeSetDescription';
import type { Producer } from './Producer';
import type { Provider } from './Provider';
import type { ProviderWithNPI } from './ProviderWithNPI';
import type { Range } from './Range';
import type { Specimen } from './Specimen';

export interface Result {
  AbnormalFlag?:
    | 'Abnormal'
    | 'Critically Abnormal'
    | 'Critically High'
    | 'Critically Low'
    | 'High'
    | 'Inconclusive'
    | 'Intermediate'
    | 'Low'
    | 'Moderately Susceptible'
    | 'Normal'
    | 'Not Susceptible'
    | 'Resistant'
    | 'Susceptible'
    | 'Very Abnormal'
    | 'Very High'
    | 'Very Low'
    | 'Very Susceptible'
    | null;
  Code: string;
  Codeset?: string | null;
  CompletionDateTime?: string | null;
  Description?: string | null;
  FileType?: string | null;
  Notes?: string[];
  ObservationMethod?: CodeSetDescription;
  Performer?: Provider;
  PrimaryResultsInterpreter?: ProviderWithNPI;
  Producer?: Producer;
  ReferenceRange?: Range;
  RelatedGroupID?: string | null;
  Specimen?: Specimen;
  Status: 'Canceled' | 'Corrected' | 'Deleted' | 'Final' | 'Incomplete' | 'None Specified' | 'Preliminary' | 'Unavailable';
  Units?: string | null;
  Value: string;
  ValueType:
    | 'Address'
    | 'Coded Entry'
    | 'Date'
    | 'DateTime'
    | 'Encapsulated Data'
    | 'Formatted Text'
    | 'ID And Name'
    | 'ID'
    | 'Money'
    | 'Name'
    | 'Numeric'
    | 'Phone Number'
    | 'Price'
    | 'Reference Pointer'
    | 'String'
    | 'Structured Numeric'
    | 'Time';
}
