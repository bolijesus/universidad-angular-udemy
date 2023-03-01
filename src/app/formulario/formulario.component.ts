import { Component, ViewChild, ElementRef} from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from '../LogingService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @ViewChild('nombreRef') nombre:ElementRef = new ElementRef(null);
  @ViewChild('apellidoRef') apellido:ElementRef = new ElementRef(null);

  constructor(private logingService:LogginService, private personasServices:PersonasService){

  }

  agregarPersona():void {
    let persona1 = new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value);
    this.personasServices.agregarPersona(persona1);
  }
}
