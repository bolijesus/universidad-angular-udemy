import { LogginService } from "./LogingService.service";
import { Persona } from "./persona.model";
import {Injectable} from "@angular/core"

@Injectable()
export class PersonasService {
    personas: Persona[] = [
        new Persona('Juan', 'Perez'),
        new Persona('Laura', 'Juarez'),
    ];

    constructor(private logingService:LogginService){

    }

    agregarPersona(persona: Persona): void {
        this.logingService.enviaMensajeAConsola("agregamos persona: "+persona);
        this.personas.push(persona);
    }
}