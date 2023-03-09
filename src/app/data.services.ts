import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices {
    constructor(private httpClient: HttpClient, private loginService:LoginService) {

    }

    cargarPersonas(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://uni-angular-app-personas-default-rtdb.firebaseio.com/datos.json?auth='+token);
    }

    //Guardar personas
    guardarPersonas(personas: Persona[]) {
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://uni-angular-app-personas-default-rtdb.firebaseio.com/datos.json?auth='+token, personas)
            .subscribe(
                response => console.log(response),
                error => console.log('Error al guardar personas: ' + error)
            );
    }

    modificarPersona(index:number, persona:Persona){
        const token = this.loginService.getIdToken();
        let url:string;
        url = 'https://uni-angular-app-personas-default-rtdb.firebaseio.com/datos/'+ index +'.?auth='+token
        this.httpClient.put(url, persona)
        .subscribe(
            response => console.log("Resultado de modificar el objeto persona:"+ response),
            error => console.log('Error en modificar persona:' + error)            
        );
    }

    eliminarPersona(index:number){
        const token = this.loginService.getIdToken();
        let url:string;
        url = 'https://uni-angular-app-personas-default-rtdb.firebaseio.com/datos/'+ index +'.?auth='+token;
        this.httpClient.delete(url)
        .subscribe(
            response => console.log('resultado eliminar persona:' + response),
            error => console.log('Error en eliminar persona:' + error)            
        );
    }
}