import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { nameValidator } from 'src/app/shared/directives';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CoursesStoreService } from 'src/app/services/courses-store.service';

type GetCourseResult = {
  result: {
    authors: string[]
    creationDate: string
    description: string
    duration: number
    id: string
    title: string
  },
  successful: boolean
}

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
  providers: [ AuthorsStoreService]
})
export class CourseFormComponent implements OnInit {
  courseForm!: FormGroup;
  isEditMode: boolean;
  currentCourse?: any;
  currentCourseId?: string;
  
  constructor(private authorStoreService: AuthorsStoreService,
    private router: Router,
    private route: ActivatedRoute,
    public coursesStoreService: CoursesStoreService
    ) {
      this.isEditMode = this.route.snapshot.url[0].path === 'edit' ? true : false;
    }

  ngOnInit(): void {

    if (this.isEditMode) {
      const idQuery = this.route.snapshot.params['id'];
      this.currentCourseId = idQuery.slice(1, idQuery.length);
      this.coursesStoreService.getCourse(this.currentCourseId!).subscribe(course => {
        this.currentCourse = course;
        // @ts-ignore
        const getFormArray = () => course.result.authors.map((author) => new FormControl(author))
        this.courseForm = new FormGroup({
          // @ts-ignore
          'title': new FormControl(course.result.title, Validators.required),
          // @ts-ignore
          'description': new FormControl(course.result.description, Validators.required),
          // @ts-ignore
          'duration':  new FormControl(course.result.duration, [Validators.required, Validators.min(0)]),
          'newAuthor': new FormGroup({
            'authorName': new FormControl(null, nameValidator()),
          }),
          'authors': new FormArray(getFormArray())
        });
      })
    } else {
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
  }

  onFormSubmit() {
    if (this.isEditMode) {
      const reqBody = {
        ...this.courseForm.value, 
        id: this.currentCourseId
      }
      delete reqBody.newAuthor
      this.coursesStoreService.editCourse(reqBody);
    } else {
      const reqBody = this.courseForm.value;
      delete reqBody.newAuthor
      this.coursesStoreService.createCourse(reqBody);
    }
    (<FormArray>this.courseForm.get('authors')).clear();
    this.courseForm.reset();
    this.router.navigate(['']);
  }

  onCreateAuthor(value: string) {
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
