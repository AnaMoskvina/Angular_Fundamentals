import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { NotAuthorizedGuard } from '../../auth/guards/not-authorized.guard'


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [NotAuthorizedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }