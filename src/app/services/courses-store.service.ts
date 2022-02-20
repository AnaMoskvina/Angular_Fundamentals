import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {
  private isLoading$$: BehaviorSubject<boolean> =new BehaviorSubject<boolean>(false);
  private courses$$: BehaviorSubject<Object[]> = new BehaviorSubject<Object[]>([]); // TODO add type
  public isLoading$: Observable<boolean> = this.isLoading$$?.asObservable();
  public courses$: Observable<Object[]> = this.courses$$?.asObservable();

  constructor(private coursesService: CoursesService) { }

  getAll() {
    this.coursesService.getAll().subscribe(courses => {
      console.log(courses);
    })
  }

  createCourse(course: {}) { // TODO: add type
    this.coursesService.createCourse(course).subscribe(course => {
      console.log(course);
    })
  }

  editCourse(course: {id: string}) { // TODO: add type
    this.coursesService.editCourse(course).subscribe(course => {
      console.log(course);
    })
  }
  
  getCourse(id: string) {
    this.coursesService.getCourse(id).subscribe(course => {
      console.log(course);
    })
  }

  deleteCourse(id: string) {
    this.coursesService.deleteCourse(id).subscribe(course => {
      console.log(course);
    })
  }

}
