import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: ['./course-edit-page.component.scss']
})
export class CourseEditPageComponent implements OnInit {

  editMode: boolean;

  constructor(
    private route: ActivatedRoute) {
    this.editMode = this.route.snapshot.url[0].path === 'edit' ? true : false;
  }

  ngOnInit(): void {
  }

}
