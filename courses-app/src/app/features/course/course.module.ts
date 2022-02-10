import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseComponent } from '../course/course.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CourseComponent,
    CourseFormComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    CourseComponent,
    CourseFormComponent
  ]
})
export class CourseModule { }
