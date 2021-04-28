import type { Meta, Patient } from '../common';

import type { OrderOrder } from './OrderOrder';
import type { OrderVisit } from './OrderVisit';

export interface UpdateMeta extends Meta {
  DataModel: 'Order';
  EventType: 'Update';
}

export interface Update {
  Meta: UpdateMeta;
  Order: OrderOrder;
  Patient: Patient;
  Visit?: OrderVisit;
}
