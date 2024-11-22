/*vamos a crear un servicio que nos permita calcular la inversion que deseamos 
1. se debe crear una clase y esportarla preferiblemente con el nombre del archivo
2. decoramos la clase con @Injectable y le pasamos un objeto de configuración para que angular sea capaz de inyectar este servicio 
y que los componentes puedan solicitar la inyeccción de este servicio
3. dentro del servicio debemos ser capaces de recibir los datos introducidos por el usuario  
4. usamos InversionEntrada que viene del model inversion entrada 
 ------------ COMO UTILIZAR EL SERVICIO -----------------------------------

*/

import { Injectable, signal } from "@angular/core";
import { IversionEntrada } from "./inversion-entrada.model";

@Injectable({providedIn:'root'})
export class CalculoInversionService  {
/*creamos una propiedad normal usamos el signo interrogación ya que puede se de tipo indefinido
    resultadosDatos?:{
        annio: number,
        interes: number,
        valorFinAnnio: number,
        valorAnualInversion: number,
        interesTotal: number,
        montoTotalInvertido:number,
    }[]
*/
// ***** uso de señales ***********************
resultadosDatos= signal<{
    annio: number,
    interes: number,
    valorFinAnnio: number,
    valorAnualInversion: number,
    interesTotal: number,
    montoTotalInvertido:number,
}[] | undefined> (undefined);     

    calcularResultadoInversion(data:IversionEntrada) {

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
        
        //a resultados data le pasamos o lo igualamos a datosAnuales
        //esto nos permitira guardar el resultado del metodo calcularResultadoInversion, esto si estamos utilizando la propiedad sin uso de señales
        //this.resultadosDatos=datosAnuales;
      

        /* ***** con uso de señales  */

        this.resultadosDatos.set(datosAnuales);
       
      }
}