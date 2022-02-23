import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private isAdmin$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private name$$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public isAdmin$: Observable<boolean> = this.isAdmin$$?.asObservable();
  public name$: Observable<string> = this.name$$?.asObservable();

  constructor(private userService: UserService) { }

  getUser() {
    this.userService.getUser().subscribe((res: any) => {
      this.name$$.next(res.result)
    })
  }
}
