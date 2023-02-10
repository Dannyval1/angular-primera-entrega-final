import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreCompleto',
})
export class NombreCompletoPipe implements PipeTransform {
  transform(nombreCompleto: string, nombre: string, apellido: string): string {
    let resultado: string;
    resultado = nombreCompleto + ' ' + nombre + ' ' + apellido;
    return resultado;
  }
}
