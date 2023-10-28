import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl : string = environment.baseUrl

  constructor(private http: HttpClient) { }

  public getBooks() : Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl)
  }

}
