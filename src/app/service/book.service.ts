import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Books } from '../interface/books.interface';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  httpBook() {
    return this.http.get<Books[]>(
      'https://www.anapioficeandfire.com/api/books'
    );
  }
}
