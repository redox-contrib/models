import type { Meta, Note, Patient } from '..';

import type { NotesOrder } from './NotesOrder';
import type { NotesVisit } from './NotesVisit';

export interface NewMeta extends Meta {
  DataModel: 'Notes';
  EventType: 'New';
}

export interface NewNote extends Note {
  FileContents?: string | null;
}

export interface New {
  Meta: NewMeta;
  Note: NewNote;
  Patient: Patient;
  Orders?: NotesOrder[];
  Visit?: NotesVisit;
}
