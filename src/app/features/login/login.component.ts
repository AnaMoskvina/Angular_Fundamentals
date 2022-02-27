import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserStoreService } from 'src/app/user/services/user-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    email: "",
    password: ""
  };

  constructor(private authService: AuthService,
    private userStoreService: UserStoreService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    this.authService.login(form.value);
    this.authService.isAuthorized$.subscribe(isAuthorized => {
      isAuthorized && this.router.navigate(['/courses']);
    })
    form.resetForm();
  }

}
