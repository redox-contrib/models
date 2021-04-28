import type { Meta, Patient } from '../common';

import type { ResultsOrder } from './ResultsOrder';
import type { ResultsVisit } from './ResultsVisit';

export interface NewMeta extends Meta {
  DataModel: 'Results';
  EventType: 'New';
}

export interface New {
  Meta: NewMeta;
  Orders: ResultsOrder[];
  Patient: Patient;
  Visit?: ResultsVisit;
}
