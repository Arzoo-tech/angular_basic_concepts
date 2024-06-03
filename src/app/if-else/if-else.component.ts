import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css']
})
export class IfElseComponent {
  title = 'If-else condition';
  show = true;
  onChange() {
    this.show = !this.show;
  }
}
