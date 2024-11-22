//import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, Input } from '@angular/core';
import { CalculoInversionService } from '../calculoInversion.service';

@Component({
  selector: 'app-resultados-inversion',
  //standalone: true,
  //en est asección importamos los pipes que nos sirve para formatear los datos y represntarlos en valores de moneda
  //imports:[CurrencyPipe],
  templateUrl: './resultados-inversion.component.html',
  styleUrl: './resultados-inversion.component.less'
})
export class ResultadosInversionComponent {
  //creamos una propiedad en este caso resultados que nos permitira resivir cambios  
  /* resultados = input<
      annio: number,
      interes: number,
      valorFinAnnio: number,
      valorAnualInversion: number,
      interesTotal: number,
      montoTotalInvertido:number,>() esto seria enfocado al uso de señales 
  
  //el segundo enfoque se realiza con el decorador @ seguido de Input, nombre de la propiedad y se establece el tipo de dato que esperamos 
  //al agregar el signo? le decimos a typescrip que estamos esperando un objeto que puede que venga con valor indefinido
  @Input() resultados?:{
      annio: number,
      interes: number,
      valorFinAnnio: number,
      valorAnualInversion: number,
      interesTotal: number,
      montoTotalInvertido:number,
  }[];

  ya no lo usamos porque estamos usando servicios 
*/
  //***************   OTRA FORMA DE LLAMAR AL SERVICIO ES CREANDO LA PROPIEDAD  */
  private resultadoServicio = inject(CalculoInversionService);

  //vamos a exportar los resultados a la plantilla usando un metodo get si estamos usando un metodo normal 
  // usamos el this para referirnos a la propiedad de esta clase donde tenemos instanciado el servicio y con un punto adicional para referirnos a la propiedad del servicio 
  //que nos devuelve los datos o el array dionde tenemos almacenados los datos.
  //get resultados(){
    //return this.resultadoServicio.resultadosDatos;
 // }
// si usamos señales lo mas apropiado seria usar la propiedad computed de Angula en una función anonima  que optendriamos datos de solo lectura
  resultados = computed(()=> this.resultadoServicio.resultadosDatos());
  // tambien es valido : resultados= this.resultadosServicio.resultadosDatos.asReadonly();
}
