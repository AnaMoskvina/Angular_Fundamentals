import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserStoreService } from 'src/app/user/services/user-store.service';

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
    private userStoreService: UserStoreService) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    this.authService.login(form.value);
    // () => this.userStoreService.getUser(); // TODO: doesn't work
    form.resetForm();
  }

}
