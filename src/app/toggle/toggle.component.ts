import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  title = 'Toggle Element';
  display = true
  toggle() {
    this.display = !this.display
  }
}
