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
  modoEdicion:number = 0;

  constructor(private logingService: LogginService, private personasService: PersonasService,
    private router:Router,
    private route:ActivatedRoute
    ) {
    this.personasService.saludar.subscribe(
      (indice: number) => alert("el indice es: " + indice)
    );
  }
  
  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      let persona:Persona = this.personasService.encontrarPersona(this.index);
      this.nombre = persona.nombre;
      this.apellido = persona.apellido;
    }
  }

  onGuardarPersona(): void {
    let persona1 = new Persona(this.nombre, this.apellido);
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      this.personasService.modificarPersona(this.index, persona1);
    } else {
      this.personasService.agregarPersona(persona1);
    }
    this.router.navigate(['personas']);
  }

  eliminarPersona(){
    if (this.index != null) {
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }
}
