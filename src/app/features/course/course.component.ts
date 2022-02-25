import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesStoreService } from 'src/app/services/courses-store.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courseId: string
  course: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public coursesStoreService: CoursesStoreService
    ) {
      const idQuery = this.route.snapshot.params['id'];
      this.courseId = idQuery.slice(1, idQuery.length);
  }

  ngOnInit(): void {
      this.coursesStoreService.getCourse(this.courseId!).subscribe(course => {
        this.course = course;
      })
  }

  goBack(): void{
    this.router.navigate(['courses']);
  }

}
