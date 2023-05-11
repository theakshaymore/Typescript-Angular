import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Employee {
  id: any;
  name: any;
  gender: any;
  salary: any;
  dob: any;
  login_id: any;
}
@Component({
  selector: 'app-getemployeebyid',
  templateUrl: './getemployeebyid.component.html',
  styleUrls: ['./getemployeebyid.component.css'],
})
export class GetemployeebyidComponent implements OnInit {
  employeeId: any;
  employee: any;
  employees: Employee[] = [
    {
      id: 101,
      name: 'Akshay',
      gender: 'M',
      salary: 10000,
      dob: '02-09-2001',
      login_id: 'abc',
    },
    {
      id: 102,
      name: 'Rohit',
      gender: 'M',
      salary: 10000,
      dob: '02-09-2001',
      login_id: 'abc',
    },
    {
      id: 103,
      name: 'Pd',
      gender: 'F',
      salary: 10000,
      dob: '02-09-2001',
      login_id: 'abc',
    },
  ];
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('id');
    this.getEmployee();
  }
  getEmployee(): void {
    const id = Number(this.employeeId);
    this.employee = this.employees.find((employee) => employee.id === id);
  }
}
