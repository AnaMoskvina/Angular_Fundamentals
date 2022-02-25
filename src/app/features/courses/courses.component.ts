import { Component, OnInit } from '@angular/core';
import { Course } from './courses.types';
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

  user = '';
  isAdmin = false;
  showDeleteModal = false;
  infoTitle = 'You can also add new course';
  infoText = 'Please, use the "Add new course" button';
  infoButtonText = 'Add new couse';
  courses = [];
  modalResult = false;

  constructor(public coursesStoreService:CoursesStoreService, 
    public authService: AuthService,
    public userStoreService: UserStoreService,
    private router: Router) {
    }

  ngOnInit(): void {
    this.coursesStoreService.getAll();
    this.userStoreService.getUser();
    this.userStoreService.name$.subscribe((name: string) => this.user = name);
    this.userStoreService.isAdmin$.subscribe((isAdmin: boolean) => this.isAdmin = isAdmin);
  }

  removeItem(currentCourse: Course) {
    this.showDeleteModal = true;
    if (this.modalResult) {
      this.coursesStoreService.deleteCourse(currentCourse.id!)
    }
    this.modalResult = false;
  }

  handleDeleteModalResult(result: boolean) {
    this.showDeleteModal = false;
    this.modalResult = result;
  }

  editItem(currentCourse: Course) {
    this.router.navigate([`courses/edit/:${currentCourse.id}`])
   }

  showItem(currentCourse: Course) {
    this.router.navigate([`courses/:${currentCourse.id}`])
  }

  logout() {
    this.authService.logout();
    this.authService.isAuthorized$.subscribe(isAuthorized => {
      !isAuthorized && this.router.navigate(['/login']);
    })
  }

  addCourse() {
    this.router.navigate(['courses/add'])
  }

  handleSearch(query: string) {
    this.coursesStoreService.searchCourse(query);
  }

}
