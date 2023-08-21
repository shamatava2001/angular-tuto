import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'increment'
})
export class IncrementPipe implements PipeTransform {

  transform(value: number, incrementBy: number): number {
    return value + incrementBy;
  }

}
