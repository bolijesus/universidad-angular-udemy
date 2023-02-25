import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() sumando = new EventEmitter<number>();
  operandoA:number = 0;
  operandoB:number = 0;

  sumar(){
    let resultado = this.operandoA + this.operandoB;
    this.sumando.emit(resultado);
  }

}
