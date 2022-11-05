import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { NoteListComponent } from './note-list/note-list.component';
import { AddNoteComponent } from './add-note/add-note.component';
import {HttpClientModule} from "@angular/common/http";
import { CurrentNoteComponent } from './current-note/current-note.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';

const routes: Routes = [
  { path: '', component: ChapterListComponent },
  { path: 'list', component: ChapterListComponent },
  { path: 'add-note', component: AddNoteComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoteListComponent,
    AddNoteComponent,
    CurrentNoteComponent,
    ChapterListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
