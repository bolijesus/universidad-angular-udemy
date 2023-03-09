import { Component, OnInit } from '@angular/core';
import { PersonasService } from './personas.service';
import { initializeApp} from "firebase/app";
import { LoginService } from './login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonasService]
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';

  constructor(private loginService:LoginService){}

  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyDEMyCPfELihx9PxFJxvzU2wSKMMcm4_XQ",
      authDomain: "uni-angular-app-personas.firebaseapp.com",
      databaseURL: "https://uni-angular-app-personas-default-rtdb.firebaseio.com",
      projectId: "uni-angular-app-personas",
      storageBucket: "uni-angular-app-personas.appspot.com",
      messagingSenderId: "611400647097",
      appId: "1:611400647097:web:de97720ab223597c57b668"
    };
    const app = initializeApp(firebaseConfig);
  }

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logOut();
  }
}
