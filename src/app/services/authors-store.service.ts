import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { AuthorsService } from './authors.service';

interface Author {
  name: string,
  id: string
}

// interface AuthorServiceResponse {
//   successful: true,
//   result: {
//     name: string,
//     id: string
//   }
// }

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
    this.isLoading$$.next(true);
      this.authorService.getAll().subscribe((response:any) => {
        this.authors$$.next(response.result);
      })
    this.isLoading$$.next(false);
  }

  addAuthor(name: string) {
    this.isLoading$$.next(true);
    this.authorService.addAuthor(name).subscribe(response => {
      console.log(response);
      // this.authors$$.next(this.authors$$.getValue().push(response)); //TODO
    })
    this.isLoading$$.next(false);
  }

  getAuthor(id: string) {
    return this.authorService.getAuthor(id).pipe(
      //@ts-ignore
      map((author) => author.result)
    )
  }
}
