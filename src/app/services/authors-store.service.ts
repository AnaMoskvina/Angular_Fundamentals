import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService {

  private isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private authors$$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public isLoading$: Observable<boolean> = this.isLoading$$?.asObservable();
  public authors$: Observable<string[]> = this.authors$$?.asObservable();

  constructor(private authorService: AuthorsService) { }

  getAll() {
    this.authorService.getAll().subscribe(authors => {
      console.log(authors);
    })
  }

  addAuthor(name: string) {
    this.authorService.addAuthor(name).subscribe(response => {
      console.log(response);
      // this.authors$$.next(this.authors$$.getValue().push(response));
    })
  }
}
