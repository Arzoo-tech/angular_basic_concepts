import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent {
  title = 'For Loop';
  users = ['Arzoo', 'Charu', 'Apoorv', 'Archana', 'Yugal']
  userDetails = [
    { name: 'Arzoo', email: 'arzoo@test.com', phone: '1234' },
    { name: 'Charu', email: 'charu@test.com', phone: '0000' },
    { name: 'Apoorv', email: 'apoorv@test.com', phone: '5678' },
    { name: 'Archana', email: 'archana@test.com', phone: '1010' },
    { name: 'Yugal', email: 'yugal@test.com', phone: '9999' },
  ]
}
