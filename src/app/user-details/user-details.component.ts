import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  constructor(){  }
  @Input() item:{name:string,email:string,phone:any}={name:'',email:'',phone:null};
  ngOnInit():void{}

}
