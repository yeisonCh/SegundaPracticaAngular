import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  @Output() calcular = new EventEmitter<{valorInicialInversion:number, 
  duracion:number,
  tasaRentabilidadEsperada:number, 
  valorAnualInversion:number}>();
  
  
  //creamos propiedades con las cuales vamos a recibir datos del html
  ingresarValorInicialInversion='0';
  ingresarValorAnualInversion='0';
  ingresarTasaRentabilidadEsperada='5'; //esto haciendo alución a que esperamos una retribución del 5% 
  ingresarDuracion='10';






  //creamos el metodo que accionara el ngSubmit del formulario
  onSubmit(){
    this.calcular.emit({
      //usamos el signo más para realizar el casting de string a nunmber
      valorInicialInversion:+this.ingresarValorInicialInversion, 
      duracion:+this.ingresarDuracion,
      tasaRentabilidadEsperada:+this.ingresarTasaRentabilidadEsperada, 
      valorAnualInversion:+this.ingresarValorAnualInversion
    })

    
    
    console.log("se ha enviado el formulario mediante el metodo onSubmit")
    console.log(this.ingresarValorInicialInversion);
    console.log(this.ingresarValorAnualInversion);
    console.log(this.ingresarTasaRentabilidadEsperada);
    console.log(this.ingresarDuracion);

  }

}
