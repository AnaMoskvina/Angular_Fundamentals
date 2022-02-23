import { Component, OnInit } from '@angular/core';
import { Course } from './courses.types';
import { coursesMock } from './courses.mock';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserStoreService } from 'src/app/user/services/user-store.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  user = 'Anastasiia'; // TODO: will be changed later
  showModal = false;
  
  // TODO: set static values in template, remove from here
  infoTitle = 'Your list is empty';
  infoText = 'Please, use the "Add new course" button to add your first course';
  infoButtonText = 'Add new couse';

  modalTitle = 'Hi!';
  modalMessage = 'This functionality is still in progress';
  modalOkText = 'ok';
  modalCancelText = 'cancel';

  editable = true;
  courses = coursesMock;

  constructor(public coursesStoreService:CoursesStoreService, 
    public authService: AuthService,
    public userStoreService: UserStoreService) {
    }

  ngOnInit(): void {
    this.coursesStoreService.getAll();
    this.userStoreService.getUser();
    this.userStoreService.name$.subscribe((event: any) => this.user = event.name)
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
    this.authService.logout();
  }

  addCourse() {
    this.showModal = true; // info component is just for demo purposes
  }

  getModalResult(result: boolean) {
    this.showModal = false;
    console.log(result); // TODO: add implementation when needed
  }

  handleSearch(query: string) {
    this.coursesStoreService.searchCourse(query);
  }

}
