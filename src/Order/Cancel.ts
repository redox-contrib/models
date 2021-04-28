import type { Meta, Patient } from '..';

import type { OrderOrder } from './OrderOrder';
import type { OrderVisit } from './OrderVisit';

export interface CancelMeta extends Meta {
  DataModel: 'Order';
  EventType: 'Cancel';
}

export interface Cancel {
  Meta: CancelMeta;
  Order: OrderOrder;
  Patient: Patient;
  Visit?: OrderVisit;
}
