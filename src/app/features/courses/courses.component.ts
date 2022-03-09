import { Component, OnInit } from '@angular/core';
import { Course } from './courses.types';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserStoreService } from 'src/app/user/services/user-store.service';
import { Router } from '@angular/router';
import { UserStateFacade } from 'src/app/user/store/user.facade';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  showDeleteModal = false;
  infoTitle = 'You can also add new course';
  infoText = 'Please, use the "Add new course" button';
  infoButtonText = 'Add new couse';
  courseToDelete?: any;
  courses?: any;

  constructor(public coursesStoreService:CoursesStoreService, 
    public authService: AuthService,
    public userStoreService: UserStoreService,
    private router: Router,
    public userStateFacade: UserStateFacade,
    public coursesStateFacade: CoursesStateFacade
    ) { }

  ngOnInit(): void {
    this.coursesStateFacade.getAllCourses();
    this.courses = this.coursesStateFacade.allCourses$;
    this.userStateFacade.getUser();
  }

  removeItem(currentCourse: Course) {
    this.courseToDelete = currentCourse.id;
    this.showDeleteModal = true;
  }

  handleDeleteModalResult(result: boolean) {
    if (result) {
      // this.coursesStateFacade.deleteCourse(this.courseToDelete);
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
    // this.coursesStateFacade.getFilteredCourses(query);
    this.coursesStoreService.searchCourse(query);
  }

}
