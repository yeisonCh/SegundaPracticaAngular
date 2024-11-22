import { Component, signal } from '@angular/core';
//import { CabeceraComponent } from "./cabecera/cabecera.component";
//import { EntradaUsuarioComponent } from "./entrada-usuario/entrada-usuario.component";
//import type { IversionEntrada } from './inversion-entrada.model';
//import { ResultadosInversionComponent } from './resultados-inversion/resultados-inversion.component';

@Component({
  selector: 'app-root',
  //standalone: true, comentamos standalone e imports para migrar a modulos
  //imports: [CabeceraComponent, EntradaUsuarioComponent,ResultadosInversionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'app-calculadora';
  /*establecemos una propiedad para los resultados de los datos si no queremos hacer uso de señales 
  resultadosDatos?:{
    annio: number,
    interes: number,
    valorFinAnnio: number,
    valorAnualInversion: number,
    interesTotal: number,
    montoTotalInvertido:number,
}[];
// propiedad resultadoDatos enfocado a señales la cual al utilizarla la debemos importar en el nucleo de angular esto si no queremos hacer uso de servicios
resultadosDatos= signal<{
  annio: number,
  interes: number,
  valorFinAnnio: number,
  valorAnualInversion: number,
  interesTotal: number,
  montoTotalInvertido:number,
}[] | undefined>(undefined);*/
  //podemos crear una función y pasar estos parametros en el mismo orden 
 //calcularResultadoInversion(valorInicialInversion:number, duracion:number,tasaRentabilidadEsperada:number, valorAnualInversion:number) {

 //ó creau la función y pasarle un objeto como lo haremos a continuación
 //calcularResultadoInversion(data:{valorInicialInversion:number, duracion:number,tasaRentabilidadEsperada:number, valorAnualInversion:number}) 
/*  calcularResultadoInversion(data:IversionEntrada) {

    //destructuramos el objeto data, para que lo que viene adentro se vuelva nuevamene variables 
    const {valorInicialInversion,duracion,tasaRentabilidadEsperada,valorAnualInversion}=data; 
    const datosAnuales = [];
    let ValorInversion = valorInicialInversion;
  
    for (let i = 0; i < duracion; i++) {
      const annio = i + 1;
      const interesesFinalesAnnio = ValorInversion * (tasaRentabilidadEsperada / 100);
      ValorInversion += interesesFinalesAnnio + valorAnualInversion;
      const interesTotal = ValorInversion - valorAnualInversion * annio - valorInicialInversion;
      datosAnuales.push({
        annio: annio,
        interes: interesesFinalesAnnio,
        valorFinAnnio: ValorInversion,
        valorAnualInversion: valorAnualInversion,
        interesTotal: interesTotal,
        montoTotalInvertido: valorInicialInversion + valorAnualInversion * annio,
        
      });
    }
    //para trabajar con señales usamos set y establecemos el valor 
    this.resultadosDatos.set(datosAnuales);

    // this.resultadosDatos=datosAnuales; codigo si no usamos señales 
    //console.log(datosAnuales);
    //  return datosAnuales;
   
  }*/

}
