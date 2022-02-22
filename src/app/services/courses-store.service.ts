import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoursesService } from './courses.service';
import { Course } from '../features/courses/courses.types';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {
  private isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private courses$$: BehaviorSubject<Course[]> = new BehaviorSubject<Course[]>([]);
  public isLoading$: Observable<boolean> = this.isLoading$$?.asObservable();
  public courses$: Observable<Course[]> = this.courses$$?.asObservable();

  constructor(private coursesService: CoursesService) { }

  getAll() {
    this.isLoading$$.next(true);
    this.coursesService.getAll().subscribe((response: any) => {
      this.courses$$.next(response.result);
    })
    this.isLoading$$.next(false);
  }

  createCourse(course: Course) {
    this.isLoading$$.next(true);
    this.coursesService.createCourse(course).subscribe(course => {
      console.log(course);
    })
    this.isLoading$$.next(false);
  }

  editCourse(id: Course) {
    this.isLoading$$.next(true);
    this.coursesService.editCourse(id).subscribe(course => {
      console.log(course);
    })
    this.isLoading$$.next(false);
  }
  
  getCourse(id: string) {
    this.isLoading$$.next(true);
    this.coursesService.getCourse(id).subscribe(course => {
      console.log(course);
    })
    this.isLoading$$.next(false);
  }

  deleteCourse(id: string) { // TODO: check
    this.isLoading$$.next(true);
    this.coursesService.deleteCourse(id).subscribe((result: any) => { // TODO: type
      let courses = this.courses$$.getValue();
      let index = courses.findIndex((course) => course.id === result.id);
      this.courses$$.next(courses.splice(index, 1));
    })
    this.isLoading$$.next(false);
  }

}
