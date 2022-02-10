import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creationDate'
})
export class CreationDatePipe implements PipeTransform {

  getStringFormat(num: number): string { 
    return String(num).padStart(2, '0');
  }

  transform(value: string): string {
    const date = new Date(value);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${this.getStringFormat(day)}.${this.getStringFormat(month)}.${year}`;
  }

}
