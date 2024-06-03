import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent {
title='Style Binding';
color="red";
bgColor="green";

updateStyle()
{
  this.color="blue"
  this.bgColor="red"
}
}
