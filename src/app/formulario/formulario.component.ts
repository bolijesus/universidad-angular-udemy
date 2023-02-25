import { Component, Output, EventEmitter} from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();

  agregarPersona(nombre:HTMLInputElement, apellido:HTMLInputElement):void {
    let persona1 = new Persona(nombre.value, apellido.value);
    this.personaCreada.emit(persona1);
  }
}
