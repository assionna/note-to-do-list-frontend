import { Component, OnDestroy, OnInit } from '@angular/core';
import {ChapterService} from "../services/chapter.service";
import {Chapter} from "../interfaces/chapter-interfaces";
import { Subscription } from "rxjs";
import {Note} from "../interfaces/note-interface";

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.scss']
})
export class ChapterListComponent implements OnInit, OnDestroy {

  public chapterList: Chapter[] = [];
  public selectedChapter: Chapter | null = null;
  public selectedNote: Note;

  private timeSub: Subscription;

  constructor( private chapterService: ChapterService ) {}

  ngOnInit(): void {
    this.timeSub = this.chapterService.getChapters()
      .subscribe(chapters => this.chapterList = chapters);
  }

  ngOnDestroy() {
    this.timeSub.unsubscribe();
  }

  onSelect(chapter: Chapter): void {
    this.selectedChapter = chapter;
  }

  showNote(note: Note) {
    this.selectedNote = note;
  }
}
