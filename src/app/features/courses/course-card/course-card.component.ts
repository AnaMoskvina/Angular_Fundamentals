import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../courses.types';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input() course!: Course;
  author: any;

  constructor(public authorsStoreService: AuthorsStoreService) { 
    // authorsStoreService.getAuthor('9b87e8b8-6ba5-40fc-a439-c4e30a373d36');
    authorsStoreService.addAuthor('testAuthor');
  } 

  ngOnInit(): void {
  }

}
