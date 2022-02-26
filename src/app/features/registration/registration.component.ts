import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/directives/email-validator/email-validator.directive';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  registrationForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router) {
    this.registrationForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, emailValidator()]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnInit(): void { }

  onSubmit() {
    this.authService.register(this.registrationForm.value).subscribe(
      (res: any) => alert(res.result),
      () =>  alert('User was not created, please, check your data')
    )
    this.registrationForm.reset();
    this.router.navigate(['login']);
  }

}
