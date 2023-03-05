import { Component } from '@angular/core';
import { Persona } from '../../persona.model';
import { LogginService } from '../../LogingService.service';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  nombre:string="";
  apellido:string="";

  constructor(private logingService: LogginService, private personasServices: PersonasService) {
    this.personasServices.saludar.subscribe(
      (indice: number) => alert("el indice es: " + indice)
    );
  }

  agregarPersona(): void {
    let persona1 = new Persona(this.nombre, this.apellido);
    this.personasServices.agregarPersona(persona1);
  }
}
