import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';

export const routes: Routes = [
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(mod => mod.LoginModule)} ,
  { path: 'registration', loadChildren: () => import('./features/registration/registration.module').then(mod => mod.RegistrationModule) },  // TODO: add guard
  { path: 'courses', loadChildren: () => import('./features/courses/courses.module').then(mod => mod.CoursesModule) },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: '**', redirectTo: '/courses' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
