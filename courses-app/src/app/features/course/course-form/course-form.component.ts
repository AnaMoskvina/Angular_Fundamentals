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
      'authorName': new FormControl(null, nameValidator()),
      'authorsList': new FormArray([])
    });
  }

  onFormSubmit() {
    console.log(this.courseForm); // TODO: see result
    console.log(this.courseForm.get('authorsList')?.value);
    (<FormArray>this.courseForm.get('authorsList')).clear();
    this.courseForm.reset();
  }

  onCreateAuthor(value: string) {
    const control = new FormControl({value, disabled: true});
    (<FormArray>this.courseForm.get('authorsList')).push(control);
    (<FormControl>this.courseForm.get('authorName')).reset()
  }

  onRemoveAuthor(id: number) {
    (<FormArray>this.courseForm.get('authorsList')).removeAt(id);
  }

  getAuthorsList(courseForm: any) {
    return courseForm.get('authorsList').controls;
  }

}
