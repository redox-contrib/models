export interface Diagnosis {
  Code?: string | null;
  Codeset?: 'CPT' | 'HCPCS' | 'ICD-9' | 'ICD-10' | 'Unknown' | null;
  Name?: string | null;
  Type?: 'Admitting' | 'Final' | 'Self' | 'Unknown' | 'Working' | null;
  DocumentedDateTime?: string | null;
}
