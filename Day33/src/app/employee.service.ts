import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees = [
    {
      id: 1,
      name: 'John Doe',
      department: 'IT',
      designation: 'Software Engineer',
    },
    {
      id: 2,
      name: 'Jane Smith',
      department: 'HR',
      designation: 'HR Manager',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      department: 'Finance',
      designation: 'Finance Manager',
    },
  ];

  constructor() {
    console.log(this.employees);
  }

  getEmployeeById(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      const employee = this.employees.find(
        (employee: any) => employee.id === id
      );
      if (employee) {
        resolve(employee);
      } else {
        reject(`No employee found with ID ${id}`);
      }
    });
  }
}
