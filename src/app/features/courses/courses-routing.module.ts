import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseEditPageComponent } from '../course/course-edit-page/course-edit-page.component';
import { CourseComponent } from '../course/course.component';
import { AdminGuard } from 'src/app/user/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent
  },
  {
    path: 'add', 
    component: CourseEditPageComponent,
    canActivate: [AdminGuard]
  },
  {
    path: ':id',
    component: CourseComponent
  },
  {
    path: 'edit/:id',
    component: CourseEditPageComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }