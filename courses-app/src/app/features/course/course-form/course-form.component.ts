import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { nameValidator } from 'src/app/shared/directives/name-validator/name-validator.directive';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  courseForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.courseForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'duration':  new FormControl(null, [Validators.required, Validators.min(0)]),
      'authorName': new FormControl(null, [Validators.required, nameValidator()]),
      'authorsList': new FormArray([])
    });
  }

  onFormSubmit() {
    console.log(this.courseForm);
  }

  onCreateAuthor() {
    const control = new FormControl(null, [nameValidator()]);
    console.log(control);
    (<FormArray>this.courseForm.get('authorsList')).push(control);
  }

  get authorsList() {
    return this.courseForm.controls["authorsList"] as FormArray;
  }
}
