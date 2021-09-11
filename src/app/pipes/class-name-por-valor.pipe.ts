import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classNamePorValor'
})
export class ClassNamePorValorPipe implements PipeTransform {

  public transform(
    value: number,
    confs?: {
      classePositivo?: (string | null),
      classeZero?:     (string | null),
      classeNegativo?: (string | null),
    },
  ): string {
    if (value > 0.004999) {
      return confs?.classePositivo ?? 'positivo';
    }
    if (value < -0.004999) {
      return confs?.classeNegativo ?? 'negativo';
    }
    return confs?.classeZero ?? 'zero';
  }

}
