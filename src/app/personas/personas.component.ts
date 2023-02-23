import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  // styleUrls: ['./personas.component.css']
  styles:[`
    h1{
      color: red
    }
  `]
})
export class PersonasComponent {

  deshabilitar:boolean = true

}
