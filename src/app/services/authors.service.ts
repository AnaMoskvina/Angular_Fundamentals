import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  authorsEndpont: string = 'http://localhost:3000/authors';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.authorsEndpont}/all`);
  }

  addAuthor(name: string) {
    return this.http.post(`${this.authorsEndpont}/add`, name);
  }
}
