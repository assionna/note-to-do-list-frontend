import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import { Subscription } from "rxjs";
import {Note} from "../interfaces/note-interface";
import {NoteService} from "../services/note.service";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnChanges {

  @Output() onSelectNote = new EventEmitter<Note>();
  @Input() chapter_id: number;

  public noteList: Note[];
  public selectedNote: Note;

  constructor(private noteService: NoteService) { }

  async ngOnChanges(): Promise<void> {
    if (this.chapter_id !== undefined) {
      this.noteList = await this.noteService.getNotes(this.chapter_id).toPromise();
    }
  }

  onSelect(note: Note): void {
    this.selectedNote = note;
    this.onSelectNote.emit(note);
  }

}
