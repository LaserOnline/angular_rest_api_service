import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/interface/books.interface';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrls: ['./test-request-get.component.scss'],
})
export class TestRequestGetComponent implements OnInit {
  bookList: Books[] = [];
  booksSearch: Books[] = [];
  constructor(private http: HttpClient, private service: BookService) {
    this.service.httpBook().subscribe((res) => {
      this.bookList = res;
    });
  }
  ngOnInit(): void {}
  searchBookList(name: string) {
    this.http
      .get<Books[]>('https://www.anapioficeandfire.com/api/books?name=' + name)
      .subscribe((res) => {
        this.booksSearch = res;
        console.log(this.bookList);
      });
  }
}
