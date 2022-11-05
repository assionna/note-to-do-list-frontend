import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

import {Note} from "../interfaces/note-interface";

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  apiUrl: string = '';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  createNote(data: Note[]): Observable<any> {
    let API_URL = `${this.apiUrl}/create-note`;
    return this.http.post(API_URL, data).pipe(catchError(this.error));
  }

  getNotes(chapter_id: number): Observable<Note[]> {
    // return this.http.get<Note[]>(`${this.apiUrl}`);
    return of([
      {
        id: 0,
        title: 'Развернуть проект Angular (erp)',
        data: '- nvm install 14.20.0\n' +
          '- npm uninstall -g @angular/cli\n' +
          '- npm cache clean --force\n' +
          '- sudo npm install -g @angular/cli@12.2.16\n' +
          '- git clone https://g.krk.ru/orion-crm/frontend.v2.git\n' +
          '- cd ./frontend.v2/\n' +
          '- npm install -g @angular-devkit/schematics-cli\n' +
          '- npm install --prefix erp-schematics\n' +
          '- nvm install 10.19.0\n' +
          '- npm install\n' +
          '- npm run build --prefix erp-schematics\n' +
          '- nvm use 14.20.0\n' +
          '- ng serve',
        chapter_id: 0,
      },
      {
        id: 0,
        title: 'Развернуть проект Angular (erp)',
        data: '- nvm install 14.20.0\n' +
          '- npm uninstall -g @angular/cli\n' +
          '- npm cache clean --force\n' +
          '- sudo npm install -g @angular/cli@12.2.16\n' +
          '- git clone https://g.krk.ru/orion-crm/frontend.v2.git\n' +
          '- cd ./frontend.v2/\n' +
          '- npm install -g @angular-devkit/schematics-cli\n' +
          '- npm install --prefix erp-schematics\n' +
          '- nvm install 10.19.0\n' +
          '- npm install\n' +
          '- npm run build --prefix erp-schematics\n' +
          '- nvm use 14.20.0\n' +
          '- ng serve',
        chapter_id: 0,
      }
    ]);
  }

  updateNote(id: number, data: Note): Observable<any> {
    let API_URL = `${this.apiUrl}/update-note/${id}`;
    return this.http
      .put(API_URL, data, { headers: this.headers })
      .pipe(catchError(this.error));
  }

  deleteNote(id: number): Observable<any> {
    var API_URL = `${this.apiUrl}/delete-note/${id}`;
    return this.http.delete(API_URL).pipe(catchError(this.error));
  }

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
