import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseEditPageComponent } from '../course/course-edit-page/course-edit-page.component';
import { CourseComponent } from '../course/course.component';
import { AuthorizedGuard } from 'src/app/auth/guards/authorized.guard';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    canLoad: [AuthorizedGuard]
  },
  {
    path: 'add', 
    component: CourseEditPageComponent,
    canLoad: [AuthorizedGuard]
  },
  {
    path: ':id',
    component: CourseComponent,
    canLoad: [AuthorizedGuard]
  },
  {
    path: 'edit/:id',
    component: CourseEditPageComponent,
    canLoad: [AuthorizedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }