import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {
  // title="Child component"
  constructor() { }
  @Input() item = 0;
  ngOnInit(): void {


  }
}
