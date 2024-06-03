import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {

  title = 'multiple condition';
  color = 'black';
  onChange(color: string) {
    this.color = color;
  }
}
