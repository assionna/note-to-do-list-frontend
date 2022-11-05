import { Component, Input } from '@angular/core';

import { Note } from '../interfaces/note-interface';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-current-note',
  templateUrl: './current-note.component.html',
  styleUrls: ['./current-note.component.scss']
})
export class CurrentNoteComponent {
  @Input() note: Note;
}
