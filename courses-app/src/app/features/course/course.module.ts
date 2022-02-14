import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseComponent } from '../course/course.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseEditPageComponent } from './course-edit-page/course-edit-page.component';



@NgModule({
  declarations: [
    CourseComponent,
    CourseFormComponent,
    CourseEditPageComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    CourseComponent,
    CourseFormComponent,
    CourseEditPageComponent
  ]
})
export class CourseModule { }
