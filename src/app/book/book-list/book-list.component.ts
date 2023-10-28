import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books : Array<Book> = [];

  constructor(private bookService : BookService) { }

  ngOnInit() {
    this.getBooks()
  }

  private getBooks() : void {
    this.bookService.getBooks().subscribe(books => {
      console.log(this.books)
      this.books = books
      console.log("hoal")
      console.log(books)
    })
  }

}
