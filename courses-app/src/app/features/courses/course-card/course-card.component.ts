import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../courses.types';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input() course!: Course;

  constructor() { }

  getStringFormat(num: number) { 
    return String(num).padStart(2, '0');
  }

  getDuration() {
    const hours = Math.floor(this.course.duration / 60);
    const mins = this.course.duration - hours * 60;
    const label = hours > 1 ? 'hours' : 'hour'
    return `${this.getStringFormat(hours)}:${this.getStringFormat(mins)} ${label}`
  }

  getAuthors() {
    return this.course.authors.join(', ');
  }

  getDate() {
    const day = this.getStringFormat(this.course.creationDate.getDate());
    const month = this.getStringFormat(this.course.creationDate.getMonth() + 1);
    return `${day}.${month}.${this.course.creationDate.getFullYear()}`;
  }

  ngOnInit(): void {
  }

}
