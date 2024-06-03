import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new angular application';
  data = "hello code";
  childData = 10;
  dataFromChild='';
  userDetails = [
    { name: 'Arzoo', email: 'arzoo@test.com', phone: '1234' },
    { name: 'Charu', email: 'charu@test.com', phone: '0000' },
    { name: 'Apoorv', email: 'apoorv@test.com', phone: '5678' },
    { name: 'Archana', email: 'archana@test.com', phone: '1010' },
    { name: 'Yugal', email: 'yugal@test.com', phone: '9999' },
  ]

  getName(name: string) {
    alert(`get Name Function called by ${name}`)
  }
  getData(name: any) {
    alert(`get Data Function called with ${name} value`)
  }
  getDataOnHover(name: any) {
    console.log(`get Data Function called with ${name} value`)
  }
  updateChild() {
    this.childData = Math.floor(Math.random() * 10)
  }
  updateData(item:string) {
      console.log(item);
      this.dataFromChild = item;
  }
}
