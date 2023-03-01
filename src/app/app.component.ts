import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { LogginService } from './LogingService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
  ];

  constructor(private logingService:LogginService){

  }

  personaAgregada(persona: Persona): void {
    this.logingService.enviaMensajeAConsola("Agregamos al array a la persona: "+persona.apellido);
    this.personas.push(persona);
  }
}
