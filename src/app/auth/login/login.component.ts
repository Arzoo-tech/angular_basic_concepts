import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = "Basic Form";
  userData: any = {};
  getData(data: NgForm) {
    console.log(data)
    this.userData = data;
  }
}
