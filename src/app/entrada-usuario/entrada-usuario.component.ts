import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculoInversionService } from '../calculoInversion.service';
// import type { IversionEntrada } from '../inversion-entrada.model'; SOLA LA USAMOS SI ESTAMOS TRABAJANDO SIN SERVICIOS

@Component({
  selector: 'app-entrada-usuario',
  standalone: true, //para uso de componentes independinetes o autonomos, 
  imports: [FormsModule],
  templateUrl: './entrada-usuario.component.html',
  styleUrl: './entrada-usuario.component.less'
})
export class EntradaUsuarioComponent {
  //creamos ua propiedad para convertirla en un evento personalizado 
  // lo podemos crear como una función de salida e importar output o utilizar un emisor de eventos e importarlo tambien en la parte de arriba
 /* @Output() calcular = new EventEmitter<{valorInicialInversion:number, 
  duracion:number,
  tasaRentabilidadEsperada:number, 
  valorAnualInversion:number}>();

  @Output() calcular = new EventEmitter<IversionEntrada>();
 */ 
  //creamos propiedades con las cuales vamos a recibir datos del html
  ingresarValorInicialInversion='0';
  ingresarValorAnualInversion='0';
  ingresarTasaRentabilidadEsperada='5'; //esto haciendo alución a que esperamos una retribución del 5% 
  ingresarDuracion='10';

// **************** USO DE UN SERVICIO  **********************
/*  Para el uso del servico debemos llegar al uso donde disparamos la acción en el formulario, ahora debemos poner el servicio a disposición del evento o de este documento
para ser usado, en este caso usaremos un constructor para inyectar el servicio usando una propiedad en este caso  calculoServicio podes asignar cualquier nombre y le 
pasamos el nombre de la clase del servico  (instanciamos la clase que creamos en el servicio), como no hemos defino la propiedad usamos la palabra resevada private 
para que angular internamente nos la cree
 */

constructor(private calculoServicio:CalculoInversionService){

}
  
  //creamos el metodo que accionara el ngSubmit del formulario
  onSubmit(){
// podemos usar la propiedad que hemos creado 
    this.calculoServicio.calcularResultadoInversion({
      valorInicialInversion:+this.ingresarValorInicialInversion, 
      duracion:+this.ingresarDuracion,
      tasaRentabilidadEsperada:+this.ingresarTasaRentabilidadEsperada, 
      valorAnualInversion:+this.ingresarValorAnualInversion
    });


    

    this.ingresarValorInicialInversion='0',
    this.ingresarValorAnualInversion='0',
    this.ingresarTasaRentabilidadEsperada='3';
    this.ingresarDuracion='5'

    
    
    console.log("se ha enviado el formulario mediante el metodo onSubmit")
    //console.log(this.ingresarValorInicialInversion);
    //console.log(this.ingresarValorAnualInversion);
    //console.log(this.ingresarTasaRentabilidadEsperada);
    //console.log(this.ingresarDuracion);

  }

}
