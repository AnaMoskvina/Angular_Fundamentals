import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringJoiner'
})
export class StringJoinerPipe implements PipeTransform {

  transform(value: string[], separator: string): string {
    return value.join(separator);
  }

}
