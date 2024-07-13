import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss'],
})
export class Task1Component {
  data = [
    {
      name: 'John',
      age: 20,
      email: ' john@gmail.com',
    },
    {
      name: 'Joe',
      age: 35,
      email: ' joe@gmail.com',
    },
    {
      name: 'ali',
      age: 26,
      email: ' ali@gmail.com',
    },
    {
      name: 'Jane',
      age: 34,
      email: ' jane@gmail.com',
    },
    {
      name: 'Julia',
      age: 19,
      email: ' julia@gmail.com',
    },
  ];
  x = '';

  idx = 0;
  userInput = '';

  getIndex() {
    return this.userInput;
  }
}
