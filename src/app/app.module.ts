import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './personas/persona/persona.component'
import { FormularioComponent } from './personas/formulario/formulario.component';
import { LogginService } from './LogingService.service';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import {DataServices} from './data.services'
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent, PersonasComponent, PersonaComponent, FormularioComponent, ErrorComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LogginService, 
    DataServices,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
