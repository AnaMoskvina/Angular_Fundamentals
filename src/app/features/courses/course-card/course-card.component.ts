import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../courses.types';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input() course!: any;
  authors: any;

  constructor(public authorsStoreService: AuthorsStoreService) { 
  } 

  ngOnInit(): void {
  }

}
