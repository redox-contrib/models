import type { Meta, Note, Patient } from '../common';

import type { NotesOrder } from './NotesOrder';
import type { NotesVisit } from './NotesVisit';

export interface ReplaceMeta extends Meta {
  DataModel: 'Notes';
  EventType: 'Replace';
}

export interface ReplaceNote extends Note {
  FileContents?: string | null;
  OriginalDocumentID?: string | null;
}

export interface Replace {
  Meta: ReplaceMeta;
  Note: ReplaceNote;
  Patient: Patient;
  Orders?: NotesOrder[];
  Visit?: NotesVisit;
}
