import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";


import { AppComponent } from "./app.component";
import { CabeceraComponent } from "./cabecera/cabecera.component";
import { EntradaUsuarioComponent } from "./entrada-usuario/entrada-usuario.component";
import { ResultadosInversionComponent } from "./resultados-inversion/resultados-inversion.component";

@NgModule({
    declarations:[
        AppComponent,
        CabeceraComponent,
        EntradaUsuarioComponent,
        ResultadosInversionComponent
    ],
imports:[BrowserModule,FormsModule],//para que los modulos tengan acceso a la directiva ngModel y el evento ngSubmit, BrowserModule para tener acceso a los pipes y Ngif y NgFor
bootstrap:[AppComponent]
}) 
export class AppModule{

}