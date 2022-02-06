import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/directives/email-validator.directive';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, emailValidator()]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    console.log(this.registrationForm);
  }

}
