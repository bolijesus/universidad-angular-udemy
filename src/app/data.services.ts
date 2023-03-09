import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
    constructor(private httpClient: HttpClient) {

    }

    cargarPersonas(){
        return this.httpClient.get('https://uni-angular-app-personas-default-rtdb.firebaseio.com/datos.json');
    }

    //Guardar personas
    guardarPersonas(personas: Persona[]) {
        this.httpClient.put('https://uni-angular-app-personas-default-rtdb.firebaseio.com/datos.json', personas)
            .subscribe(
                response => console.log(response),
                error => console.log('Error al guardar personas: ' + error)
            );
    }

    modificarPersona(index:number, persona:Persona){
        let url:string;
        url = 'https://uni-angular-app-personas-default-rtdb.firebaseio.com/datos/'+ index +'.json/'
        this.httpClient.put(url, persona)
        .subscribe(
            response => console.log("Resultado de modificar el objeto persona:"+ response)            
            ,error => console.log('Error en modificar persona:' + error)            
        );
    }
}