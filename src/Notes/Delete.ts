import type { Meta, Note, Patient } from '..';

import type { NotesOrder } from './NotesOrder';
import type { NotesVisit } from './NotesVisit';

export interface DeleteMeta extends Meta {
  DataModel: 'Notes';
  EventType: 'Delete';
}

export interface Delete {
  Meta: DeleteMeta;
  Note: Note;
  Patient: Patient;
  Orders?: NotesOrder[];
  Visit?: NotesVisit;
}
