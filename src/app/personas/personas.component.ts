import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {

  deshabilitar:boolean = false;
  mensaje:string = 'No se ha agregado ninguna persona';
  titulo:string = 'Ingeniero';
  mostrar:boolean = false;

  agregarPersona(){
    this.mostrar = true;
    this.mensaje = 'Persona agregada';
  }

}
