import { NgModule } from '@angular/core';
import { CoursesComponent } from '../courses/courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseCardComponent,
    CourseListComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CoursesComponent 
  ]
})
export class CoursesModule { }
