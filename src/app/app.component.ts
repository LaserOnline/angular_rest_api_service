import { Component } from '@angular/core';
import { BookService } from './service/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular_rest_api_service';
  constructor(private service: BookService) {
    this.service
      .httpBook()
      .subscribe((res) => console.log('App.Component', res));
  }
}
