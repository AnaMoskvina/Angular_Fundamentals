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
    this.coursesService.getAll().subscribe((res: any) => {
      this.courses$$.next(res.result);
    })
    this.isLoading$$.next(false);
  }

  createCourse(course: Course) {
    this.isLoading$$.next(true);
    this.coursesService.createCourse(course).subscribe(response => {
      let courses = this.courses$$.getValue();
      // @ts-ignore
      courses.push(response.result);
      this.courses$$.next(courses);
    })
    this.isLoading$$.next(false);
  }

  editCourse(course: Course) {
    this.isLoading$$.next(true);
    this.coursesService.editCourse(course).subscribe(response => { 
      // @ts-ignore
      const editedCourse = response.result;
      let courses = this.courses$$.getValue();
      let index = courses.findIndex((course) => course.id === editedCourse.id);
      courses.splice(index, 1, editedCourse)
      this.courses$$.next(courses);
    })
    this.isLoading$$.next(false);
  }
  
  getCourse(id: string) {
    return this.coursesService.getCourse(id);
  }

  deleteCourse(id: string) {
    this.isLoading$$.next(true);
    this.coursesService.deleteCourse(id).subscribe((result: any) => {
      let courses = this.courses$$.getValue();
      let index = courses.findIndex((course) => course.id === result.id);
      courses.splice(index, 1)
      this.courses$$.next(courses);
    })
    this.isLoading$$.next(false);
  }

  searchCourse(title: string) {
    this.isLoading$$.next(true);
    this.coursesService.getAll().subscribe((res: any) => {
      const regex = new RegExp(`^${title}`, 'gmi');
      const filteredCourses = res.result.filter((course:any) => regex.test(course.title));
      this.courses$$.next(filteredCourses);
    })
    this.isLoading$$.next(false);
  }

}
