import { Component, OnInit, Input } from '@angular/core';
import { formatDate } from '@angular/common';
import { Course } from '../courses.types';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input() course!: Course;

  constructor() { }

  ngOnInit(): void {
  }

}
