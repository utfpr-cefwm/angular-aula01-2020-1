import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classNamePorValor'
})
export class ClassNamePorValorPipe implements PipeTransform {

  public transform(
    value: number,
  ): string {
    if (value > 0.004999) {
      return 'positivo';
    }
    if (value < -0.004999) {
      return 'negativo';
    }
    return 'zero';
  }

}
