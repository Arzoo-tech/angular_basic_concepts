import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent {
  title: string = 'Get input box value';
  displayVal: string = ''
  placeholderVal: string = ''
  getValue(val: any) {
    console.log(val)
    this.displayVal = val
  }
  getPlaceholderValue(val: any) {
    console.log(val)
    this.placeholderVal = val
  }
}
