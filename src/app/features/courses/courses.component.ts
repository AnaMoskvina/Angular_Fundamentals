import { Component, OnInit } from '@angular/core';
import { Course } from './courses.types';
import { coursesMock } from './courses.mock';
import { CoursesStoreService } from 'src/app/services/courses-store.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  name = 'Anastasiia'; // TODO: will be changed later
  buttonText = 'Logout';
  isLoggedIn = true; // TODO: later will be stored in store (?)
  showModal = false;
  
  infoTitle = 'Your list is empty';
  infoText = 'Please, use the "Add new course" button to add your first course';
  infoButtonText = 'Add new couse';

  modalTitle = 'Hi!';
  modalMessage = 'This functionality is still in progress';
  modalOkText = 'ok';
  modalCancelText = 'cancel';

  editable = true;
  courses = coursesMock;

  constructor(public coursesStoreService:CoursesStoreService) { }

  ngOnInit(): void {
    this.coursesStoreService.getAll()
    console.log(this.coursesStoreService.courses$)
    console.log(this.coursesStoreService.isLoading$)
  }

  removeItem(currentCourse: Course) {
    this.courses = this.courses.filter(course => course.title !== currentCourse.title);
  }

  editItem(currentCourse: Course) {
    this.showModal = true;
    console.log(`${currentCourse.title} course should be edited`); // TODO: add implementation
   }

  showItem(currentCourse: Course) {
    this.showModal = true;
    console.log(`${currentCourse.title} course should be shown`); // TODO: add implementation
  }

  logout() {
    this.showModal = true; // TODO: add implementation when needed
  }

  addCourse() {
    this.showModal = true; // info component is just for demo purposes
  }

  getModalResult(result: boolean) {
    this.showModal = false;
    console.log(result); // TODO: add implementation when needed
  }

  handleSearch(query: string) {
    console.log(query); // TODO: add implementation when needed
  }

}
