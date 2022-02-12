import { ConditionalExpr } from '@angular/compiler';
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
      'authorName': new FormControl(null, [nameValidator()]),
      'authorsList': new FormArray([])
    });
  }

  onFormSubmit() {
    // console.log(this.courseForm);
  }

  onCreateAuthor(value: string) {
    const control = new FormControl({value, disabled: true}, Validators.required);
    (<FormArray>this.courseForm.get('authorsList')).push(control);
  }

  onRemoveAuthor(id: any) {
    const control = (<FormArray>this.courseForm.get('authorsList')).controls;
    console.log(id, control)
    // this.courses = this.courses.filter(course => course.title !== currentCourse.title);
    // (<FormArray>this.courseForm.get('authorsList')).filter(control => control !== author.id);
  }

  getAuthorsList(courseForm: any) {
    return courseForm.get('authorsList').controls;
  }

}
