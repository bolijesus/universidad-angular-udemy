import { Component, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from '../LogingService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();

  @ViewChild('nombreRef') nombre:ElementRef = new ElementRef(null);
  @ViewChild('apellidoRef') apellido:ElementRef = new ElementRef(null);

  constructor(private logingService:LogginService){

  }

  agregarPersona():void {
    let persona1 = new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value);
    this.logingService.enviaMensajeAConsola("Enviamos persona "+persona1.nombre);
    this.personaCreada.emit(persona1);
  }
}
