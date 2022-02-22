import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthorsService } from './authors.service';

interface Author {
  name: string,
  id: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService {

  private isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private authors$$: BehaviorSubject<Author[]> = new BehaviorSubject<Author[]>([]);
  public isLoading$: Observable<boolean> = this.isLoading$$?.asObservable();
  public authors$: Observable<Author[]> = this.authors$$?.asObservable();

  constructor(private authorService: AuthorsService) { }

  getAll() {
      this.authorService.getAll().subscribe((response:any) => {
        this.authors$$.next(response.result);
      })
  }

  addAuthor(name: string) {
    this.authorService.addAuthor(name).subscribe(response => {
      console.log(response);
      // this.authors$$.next(this.authors$$.getValue().push(response));
    })
  }
}
