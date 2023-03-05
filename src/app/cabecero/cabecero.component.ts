import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent {
  //@Input es para enviar informacion de otro componente hacia el atributo
  @Input() presupuestoTotal:number = 0; // se esta recibiendo de otro componente hacia este y se guarda en la variable presupuestoTotal
  @Input() ingresoTotal:number = 0;
  @Input() egresoTotal:number = 0;
  @Input() porcentajeTotal:number = 0;


}
