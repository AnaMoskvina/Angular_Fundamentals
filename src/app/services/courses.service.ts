import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  coursesEndpont: string = 'http://localhost:3000/authors';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.coursesEndpont}/all`);
  }

  createCourse(course: {}) { // TODO: add type
    return this.http.post(`${this.coursesEndpont}/add`, course);
  }

  editCourse(course: { id: string}) { // TODO: add type
    return this.http.put(`${this.coursesEndpont}/${course.id}`, course);
  }

  getCourse(id: string) {
    return this.http.get(`${this.coursesEndpont}/${id}`);
  }

  deleteCourse(id: string) { 
    return this.http.delete(`${this.coursesEndpont}/${id}`);
  }

}
