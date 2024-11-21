import { Component } from '@angular/core';
import { CabeceraComponent } from "./cabecera/cabecera.component";
import { EntradaUsuarioComponent } from "./entrada-usuario/entrada-usuario.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CabeceraComponent, EntradaUsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'app-calculadora';

  //podemos crear una función y pasar estos parametros en el mismo orden 
 //calcularResultadoInversion(valorInicialInversion:number, duracion:number,tasaRentabilidadEsperada:number, valorAnualInversion:number) {

 //ó creau la función y pasarle un objeto como lo haremos a continuación
  calcularResultadoInversion(data:{valorInicialInversion:number, duracion:number,tasaRentabilidadEsperada:number, valorAnualInversion:number}) {

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
        totalAmounInvestedt: valorInicialInversion + valorAnualInversion* annio,
      });
    }
    console.log(datosAnuales);
    //  return datosAnuales;
  }

}
