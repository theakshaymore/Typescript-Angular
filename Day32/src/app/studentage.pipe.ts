import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentage',
})
export class StudentagePipe implements PipeTransform {
  currentYear: any;
  birthYear: any;
  age: any;
  transform(dob: any): any {
    this.currentYear = new Date().getFullYear();
    this.birthYear = new Date(dob).getFullYear();
    this.age = this.currentYear - this.birthYear;
    return this.age;
  }
}
