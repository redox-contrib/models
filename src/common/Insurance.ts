import type { InsuranceCompany } from './InsuranceCompany';
import type { InsuranceInsured } from './InsuranceInsured';
import type { InsurancePlan } from './InsurancePlan';

export interface Insurance {
  AgreementType?: 'Maternity' | 'Standard' | 'Unified' | null;
  Company?: InsuranceCompany;
  CoverageType?: 'Clinic' | 'Insurance' | 'Other' | 'Patient' | null;
  EffectiveDate?: string | null;
  ExpirationDate?: string | null;
  GroupName?: string | null;
  GroupNumber?: string | null;
  Insured?: InsuranceInsured;
  MemberNumber?: string | null;
  Plan?: InsurancePlan;
  PolicyNumber?: string | null;
  Priority?: string | null;
}
