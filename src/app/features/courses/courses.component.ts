import { Component, OnInit } from '@angular/core';
import { Course } from './courses.types';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserStoreService } from 'src/app/user/services/user-store.service';
import { Router } from '@angular/router';
import { UserStateFacade } from 'src/app/user/store/user.facade';

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
  courseToDelete?: any;

  constructor(public coursesStoreService:CoursesStoreService, 
    public authService: AuthService,
    public userStoreService: UserStoreService,
    private router: Router,
    private userStateFacade: UserStateFacade
    ) { }

  ngOnInit(): void {
    this.coursesStoreService.getAll();
    this.userStoreService.getUser();
    this.userStoreService.name$.subscribe((name: string) => this.user = name);
    this.userStoreService.isAdmin$.subscribe((isAdmin: boolean) => this.isAdmin = isAdmin);
  }

  removeItem(currentCourse: Course) {
    this.courseToDelete = currentCourse.id;
    this.showDeleteModal = true;
  }

  handleDeleteModalResult(result: boolean) {
    if (result) {
      this.coursesStoreService.deleteCourse(this.courseToDelete);
    }
    this.showDeleteModal = false;
  }

  editItem(currentCourse: Course) {
    this.router.navigate([`courses/edit/:${currentCourse.id}`]);
   }

  showItem(currentCourse: Course) {
    this.router.navigate([`courses/:${currentCourse.id}`]);
  }

  logout() {
    this.authService.logout();
    this.authService.isAuthorized$.subscribe(isAuthorized => {
      !isAuthorized && this.router.navigate(['/login']);
    })
  }

  addCourse() {
    this.router.navigate(['courses/add']);
  }

  handleSearch(query: string) {
    this.coursesStoreService.searchCourse(query);
  }

}
