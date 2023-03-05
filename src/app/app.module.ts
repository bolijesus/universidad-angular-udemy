import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component'
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { LogginService } from './LogingService.service';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent, PersonasComponent, PersonaComponent, FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LogginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
