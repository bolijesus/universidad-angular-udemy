import { Component } from '@angular/core';
import { Persona } from '../../persona.model';
import { LogginService } from '../../LogingService.service';
import { PersonasService } from '../../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  nombre:string="";
  apellido:string="";

  constructor(private logingService: LogginService, private personasServices: PersonasService,
    private router:Router
    ) {
    this.personasServices.saludar.subscribe(
      (indice: number) => alert("el indice es: " + indice)
    );
  }

  onGuardarPersona(): void {
    let persona1 = new Persona(this.nombre, this.apellido);
    this.personasServices.agregarPersona(persona1);
    this.router.navigate(['personas']);

  }
}
