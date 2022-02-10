import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  getStringFormat(num: number) { 
    return String(num).padStart(2, '0');
  }

  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const mins = value - hours * 60;
    const label = hours > 1 ? 'hours' : 'hour'
    return `${this.getStringFormat(hours)}:${this.getStringFormat(mins)} ${label}`
  }

}
