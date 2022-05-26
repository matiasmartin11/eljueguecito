import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string, ...args:Array<string>): string {
    return `Nombre: ${value} - Edad: ${args[0]}`;
  }
}
