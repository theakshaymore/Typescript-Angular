import { Component } from '@angular/core';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css'],
})
export class StudentRegistrationComponent {
  std1: any;
  std2: any;
  std3: any;
  std4: any;
  newStudent: any;
  students: any;

  constructor() {
    this.std1 = {
      Sid: 101,
      Sname: 'Akshay',
      dob: '02-02-2000',
      course: 'JAVA',
      fees: 1000,
    };
    this.std2 = {
      Sid: 102,
      Sname: 'Rohit',
      dob: '02-02-2000',
      course: 'CPP',
      fees: 1000,
    };
    this.std3 = {
      Sid: 103,
      Sname: 'Atharva',
      dob: '02-02-2000',
      course: 'JAVA',
      fees: 1000,
    };
    this.std4 = {
      Sid: 104,
      Sname: 'Pd',
      dob: '02-02-2000',
      course: 'JAVA',
      fees: 1000,
    };

    this.students = [this.std1, this.std2, this.std3, this.std4];
    this.newStudent = {};
  }

  addStudent(formdata: any) {
    const newStudent = {
      Sid: formdata.Sid,
      Sname: formdata.Sname,
      dob: formdata.dob,
      course: formdata.course,
      fees: formdata.fees,
    };
    this.students.push(newStudent);
    console.log(this.students);
  }
}
