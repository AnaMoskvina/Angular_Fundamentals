import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  course: { id: number }

  constructor(private route: ActivatedRoute) {
    this.course = {
      id: this.route.snapshot.params['id']
    }
  }

  ngOnInit(): void {
  }

}
