import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IconName } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../courses.types';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  @Input() courses?: any;
  @Input() editable: boolean = true;
  @Output() removeEvent = new EventEmitter<Course>();
  @Output() editEvent = new EventEmitter<Course>();
  @Output() showEvent = new EventEmitter<Course>();

  buttonText = 'Show course';
  editIcon:IconName = 'edit';
  removeIcon: IconName = 'trash-alt';

  removeItem(value: Course) {
    this.removeEvent.emit(value);
  }

  editItem(value: Course) {
    this.editEvent.emit(value);
  }

  showItem(value: Course) {
    this.showEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
