import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  std01: any;
  std02: any;
  std03: any;
  std04: any;
  students: any;

  constructor() {
    this.std01 = {
      Sid: 1,
      Sname: 'Akshay',
      dob: '2000-10-05',
      course: 'JavaScript',
      fees: 5000,
    };
    this.std02 = {
      Sid: 2,
      Sname: 'Rohit',
      dob: '1999-02-15',
      course: 'Java',
      fees: 7000,
    };
    this.std03 = {
      Sid: 3,
      Sname: 'Atharva',
      dob: '1997-12-25',
      course: 'Python',
      fees: 6000,
    };
    this.std04 = {
      Sid: 4,
      Sname: 'Pd',
      dob: '2000-05-20',
      course: 'Flutter',
      fees: 4000,
    };
    this.students = [this.std01, this.std02, this.std03, this.std04];
  }
}
