import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './features/courses/courses.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { CourseFormComponent } from './features/course/course-form/course-form.component';
import { CourseComponent } from './features/course/course.component';
import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NotAuthorizedGuard] },
  { path: 'registration', component: RegistrationComponent, canActivate: [NotAuthorizedGuard] },
  { path: 'courses', component: CoursesComponent, canLoad: [AuthorizedGuard] },
  { path: 'courses/add', component: CourseFormComponent, canLoad: [AuthorizedGuard] },
  { path: 'courses/:id', component: CourseComponent, canLoad: [AuthorizedGuard] },  // TODO add dynamic path with id
  { path: 'courses/edit/:id', component: CourseFormComponent, canLoad: [AuthorizedGuard] } // TODO: need to prepopulate form?
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
