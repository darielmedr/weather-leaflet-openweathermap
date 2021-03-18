import { Pipe, PipeTransform } from '@angular/core';
import { TempUnitsStrings } from 'src/app/shared/types/TempUnitsStrings';

@Pipe({
  name: 'tempetureConverter'
})
export class TempetureConverterPipe implements PipeTransform {

  transform(value: number, unit: TempUnitsStrings): string {
    if (value && !isNaN(value)) {
      if(unit === 'F-C'){
        const tempareature: number = (value - 32) * (5/9) ;
        return tempareature.toFixed(2);
      }
      else if(unit === 'C-F'){
       const tempareature: number = (value * (9/5)) + 32 ;
       return tempareature.toFixed(2);
     }
     else return ''
    }
    else return '';
  }
}
