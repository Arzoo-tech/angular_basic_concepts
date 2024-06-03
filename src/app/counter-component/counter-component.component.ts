import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.css']
})
export class CounterComponentComponent {
  title = 'Counter With Angular';
  count = 0
  counter(type: string) {
    type === 'add' ? this.count++ : this.count--
  }

}
