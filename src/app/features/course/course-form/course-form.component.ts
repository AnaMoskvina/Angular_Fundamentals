import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { nameValidator } from 'src/app/shared/directives';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
  providers: [ AuthorsStoreService]
})
export class CourseFormComponent implements OnInit {
  courseForm!: FormGroup;
  
  constructor(private authorStoreService: AuthorsStoreService) { }

  ngOnInit(): void {
    this.courseForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'duration':  new FormControl(null, [Validators.required, Validators.min(0)]),
      'newAuthor': new FormGroup({
        'authorName': new FormControl(null, nameValidator()),
      }),
      'authors': new FormArray([])
    });
  }

  onFormSubmit() {
    console.log(this.courseForm.value);
    (<FormArray>this.courseForm.get('authors')).clear();
    this.courseForm.reset();
  }

  onCreateAuthor(value: string) {
    console.log(this.authorStoreService.addAuthor('hhh'));
    if (this.courseForm.get('newAuthor.authorName')?.valid &&
        this.courseForm.get('newAuthor.authorName')?.value) {
      const control = new FormControl(value);
      (<FormArray>this.courseForm.get('authors')).push(control);
      (<FormControl>this.courseForm.get('newAuthor.authorName')).reset()
    }
  }

  onRemoveAuthor(id: number) {
    (<FormArray>this.courseForm.get('authors')).removeAt(id);
  }

  getAuthors(courseForm: any) {
    return courseForm.get('authors').controls;
  }


}
