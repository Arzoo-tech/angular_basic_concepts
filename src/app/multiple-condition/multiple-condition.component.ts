import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-condition',
  templateUrl: './multiple-condition.component.html',
  styleUrls: ['./multiple-condition.component.css']
})
export class MultipleConditionComponent {
  title = 'multiple condition';
  color = 'red';
  onChange(color: string) {
    this.color = color;
  }
}
