import { LogginService } from "./LogingService.service";
import { Persona } from "./persona.model";
import { Injectable, EventEmitter } from "@angular/core"
import { FormularioComponent } from "./personas/formulario/formulario.component";

@Injectable()
export class PersonasService {
    
    personas: Persona[] = [
        new Persona('Juan', 'Perez'),
        new Persona('Laura', 'Juarez'),
    ];

    saludar = new EventEmitter<number>()

    constructor(private logingService: LogginService) {

    }

    agregarPersona(persona: Persona): void {
        this.logingService.enviaMensajeAConsola("agregamos persona: " + persona);
        this.personas.push(persona);
    }

    encontrarPersona(index: number) {
        let persona: Persona = this.personas[index];

        return persona;
    }

    modificarPersona(index: number, persona: Persona) {
        let persona1:Persona = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
    }

    eliminarPersona(index:number) {
        this.personas.splice(index, 1);
      }
}