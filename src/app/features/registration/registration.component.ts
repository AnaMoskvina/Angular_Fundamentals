import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/directives/email-validator/email-validator.directive';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  registrationForm: FormGroup;

  constructor() {
    this.registrationForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, emailValidator()]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnInit(): void { }

  onSubmit() {
    console.log(this.registrationForm);
    this.registrationForm.reset();
  }

}
