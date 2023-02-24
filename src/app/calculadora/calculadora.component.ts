import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {

  operandoA:number = 0;
  operandoB:number = 0;
  resultado:number = 0;
  sumar():void {
    this.resultado = this.operandoA + this.operandoB;
  }

  sumar_variable_binding(operandoA:number, operandoB:number):number {
    return operandoA + operandoB;
  }
}
