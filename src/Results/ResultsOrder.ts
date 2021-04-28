import type { Order, Result } from '../common';

export interface ResultsOrder extends Order {
  CompletionDateTime?: string | null;
  ResponseFlag?: 'Acknowledgement' | 'Associated Segments' | 'Confirmations' | 'Exceptions' | 'Replacements' | null;
  Results: Result[];
  ResultsStatus?: 'Canceled' | 'Corrected' | 'Final' | 'In Process' | 'Preliminary' | 'Unavailable' | null;
  Status: 'Cancel' | 'New' | 'Resulted' | 'Update';
}
