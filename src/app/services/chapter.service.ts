import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import {Chapter} from "../interfaces/chapter-interfaces";

@Injectable({
  providedIn: 'root',
})
export class ChapterService {
  apiUrl: string = '';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor( private http: HttpClient ) {}

  getChapters(): Observable<Chapter[]> {
    // return this.http.get<Chapter[]>(`${this.apiUrl}`);
    return of([
      { id: 0, title: 'Дейли' },
      { id: 1, title: 'Докс' },
      { id: 2, title: 'Смс-шлюз' },
    ]);
  }
}
