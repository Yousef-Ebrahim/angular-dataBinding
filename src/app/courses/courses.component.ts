import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  title = 'list of courses of joe';
  courses = ['course1', 'course2', 'course3'];
  isDisabled = false;
  idA = 'joe';
  isRedColor = true;
  isBlackColor = false;

  x: string = '';

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
  idx=3
getIndex(){
  return this.data[0].name;
}}
