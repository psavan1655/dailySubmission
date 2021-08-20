import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "snehal";
  password = "snehal";
  login = "";

  constructor() { }

  ngOnInit(): void {
  }
  getvalues(val: any) {
    console.log(val);
    var ema = val.email;
    var pass = val.password;

    if (ema == this.email && pass == this.password) {
      this.login = "suceessfully";
    }
    else {
      this.login = "plz enter correect email & password";
    }
  }

}
