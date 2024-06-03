import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {
  title = "class component example";
  constructor() { }
  @Output() updateDataEvent = new EventEmitter<string>();
  ngOnInit(): void { }
}
