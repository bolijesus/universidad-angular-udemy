import { Component, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { LogginService } from '../../LogingService.service';
import { PersonasService } from '../../personas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombre:string="";
  apellido:string="";
  index:number = 0;

  constructor(private logingService: LogginService, private personasServices: PersonasService,
    private router:Router,
    private route:ActivatedRoute
    ) {
    this.personasServices.saludar.subscribe(
      (indice: number) => alert("el indice es: " + indice)
    );
  }
  
  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    if (this.index) {
      let persona:Persona = this.personasServices.encontrarPersona(this.index);
      this.nombre = persona.nombre;
      this.apellido = persona.apellido;
    }
  }

  onGuardarPersona(): void {
    let persona1 = new Persona(this.nombre, this.apellido);
    if (this.index) {
      this.personasServices.modificarPersona(this.index, persona1);
    } else {
      this.personasServices.agregarPersona(persona1);
    }
    this.router.navigate(['personas']);
  }
}
