import { Component } from '@angular/core';

@Component({
  selector: 'app-nested-loop',
  templateUrl: './nested-loop.component.html',
  styleUrls: ['./nested-loop.component.css']
})
export class NestedLoopComponent {
  title = 'For Loop';
  userDetails = [
    { name: 'Arzoo', email: 'arzoo@test.com', socialAccounts: ['facebook','insta','yahoo'] },
    { name: 'Charu', email: 'charu@test.com', socialAccounts: ['facebook', 'insta', 'gmail'] },
    { name: 'Apoorv', email: 'apoorv@test.com', socialAccounts: ['facebook', 'insta', 'snapchat'] },
    { name: 'Archana', email: 'archana@test.com', socialAccounts: ['facebook', 'insta', 'orkut'] },
    { name: 'Yugal', email: 'yugal@test.com', socialAccounts: ['facebook', 'insta', 'yahoo'] },
  ]
}
