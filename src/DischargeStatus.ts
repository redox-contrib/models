export interface DischargeStatus {
  Code?:
    | '0' // Unknown
    | '01' // Home or Self Care
    | '02' // Short-Term General Hospital for Inpatient Care
    | '03' // Skilled Nursing Facility
    | '04' // Facility that Provides Custodial or Supportive Care
    | '05' // Designated Cancer Center or Children’s Hospital
    | '06' // Home Under Care of an Organized Home Health Service Organization
    | '07' // Left Against Medical Advice
    | '09' // Admitted as an Inpatient
    | '20' // Expired
    | '21' // Court/Law Enforcement
    | '30' // Still a patient
    | '40' // Expired at home
    | '41' // Expired in a Medical Facility
    | '42' // Expired - place unknown
    | '43' // Federal Health Care Facility
    | '50' // Hospice - Home
    | '51' // Hospice - Medical Facility
    | '61' // Hospital-Based Medicare Approved Swing Bed
    | '62' // Inpatient Rehabilitation Facility
    | '63' // Medicare Certified Long Term Care Hospital
    | '64' // Nursing Facility Certified under Medicaid
    | '65' // Psychiatric Hospital
    | '66' // Critical Access Hospital
    | '69' // Designated Disaster Alternate Care Site
    | '70' // Another Type of Health Care Institution (other)
    | '81' // Home or Self Care (Readmission)
    | '82' // Short Term Inpatient Hospital (Readmission)
    | '83' // Skilled Nursing Facility (SNF) (Readmission)
    | '84' // Facility that Provides Custodial or Supportive Care (Readmission)
    | '85' // Designated Cancer Center or Children's Hospital (Readmission)
    | '86' // Home Under Care of Organized Home Health Service Organization (Readmission)
    | '87' // Court/Law Enforcement (Readmission)
    | '88' // Federal Health Care Facility (Readmission)
    | '89' // Hospital-based Medicare Approved Swing Bed (Readmission)
    | '90' // Inpatient Rehabilitation Facility (Readmission)
    | '91' // Medicare Certified Long Term Care Hospital (Readmission)
    | '92' // Nursing Facility Certified Under Medicaid (Readmission)
    | '93' // Psychiatric Hospital (Readmission)
    | '94' // Critical Access Hospital (Readmission)
    | '95' // Another Type of Health Care Institution (Readmission)
    | null;
  Codeset?: string | null;
  Description?: string | null;
}
