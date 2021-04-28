import type { Component } from './Component';
import type { Provider } from './Provider';

export interface Note {
  Authenticator?: Provider;
  Availability?: 'Available' | 'Cancelled' | 'Deleted' | 'Obsolete' | 'Unavailable' | null;
  Components?: Component[];
  ContentType: 'Base64 Encoded' | 'Plain Text' | 'Rich Text';
  DocumentationDateTime?: string | null;
  DocumentID: string;
  DocumentType: string;
  FileName?: string | null;
  Notifications?: Provider[];
  Provider: Provider;
  ServiceDateTime?: string | null;
  Status?: 'Authenticated' | 'In progress' | null;
}
