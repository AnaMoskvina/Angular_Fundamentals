import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(form: { value: any}) {
    console.log(form);
  }

}
