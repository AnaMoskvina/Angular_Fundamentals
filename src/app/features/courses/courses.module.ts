import { NgModule } from '@angular/core';
import { CoursesComponent } from '../courses/courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseCardComponent,
    CourseListComponent
  ],
  imports: [
    SharedModule,
    CoursesRoutingModule
  ],
  exports: [
    CoursesComponent 
  ]
})
export class CoursesModule { }
