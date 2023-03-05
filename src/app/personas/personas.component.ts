import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from '../LogingService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  deshabilitar:boolean = false;
  mensaje:string = 'No se ha agregado ninguna persona';
  titulo:string = 'Ingeniero';
  mostrar:boolean = false;

  personas: Persona[] = [];

  constructor(private logingService:LogginService, private personasService:PersonasService){

  }

  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

  agregarPersona(){
    this.mostrar = true;
    this.mensaje = 'Persona agregada';
  }

}
