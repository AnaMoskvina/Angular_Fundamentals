import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
