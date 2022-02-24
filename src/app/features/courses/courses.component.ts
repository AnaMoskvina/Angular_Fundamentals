import { Component, OnInit } from '@angular/core';
import { Course } from './courses.types';
import { coursesMock } from './courses.mock';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserStoreService } from 'src/app/user/services/user-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  user = ''; // TODO: will be changed later
  showDeleteModal = false;
  
  // TODO: set static values in template, remove from here
  infoTitle = 'Your list is empty';
  infoText = 'Please, use the "Add new course" button to add your first course';
  infoButtonText = 'Add new couse';

  editable = true;
  courses = coursesMock;

  constructor(public coursesStoreService:CoursesStoreService, 
    public authService: AuthService,
    public userStoreService: UserStoreService,
    private router: Router) {
    }

  ngOnInit(): void {
    this.coursesStoreService.getAll();
    this.userStoreService.getUser();
    this.userStoreService.name$.subscribe((name: any) => this.user = name)
  }

  removeItem(currentCourse: Course) {
    this.showDeleteModal = true;
    // this.courses = this.courses.filter(course => course.title !== currentCourse.title);
  }

  handleDeleteModalResult(result: boolean) {
    this.showDeleteModal = false;
    if (result) {
      console.log('delete');
    } else {
      console.log('not delete');
    }
  }

  editItem(currentCourse: Course) {
    console.log(`${currentCourse.title} course should be edited`); // TODO: add implementation
   }

  showItem(currentCourse: Course) {
    console.log(`${currentCourse.title} course should be shown`); // TODO: add implementation
  }

  logout() {
    this.authService.logout();
    this.authService.isAuthorized$.subscribe(isAuthorized => {
      !isAuthorized && this.router.navigate(['/login']);
    })
  }

  addCourse() {
    // TODO: navigate
  }

  handleSearch(query: string) {
    this.coursesStoreService.searchCourse(query);
  }

}
