import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  resultado:number = 0;

   suma(resultado:number):void {
    this.resultado = resultado;
  }
}
