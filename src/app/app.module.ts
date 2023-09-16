import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { VerPersonaComponent } from './ver-persona/ver-persona.component';
import { InspeccionarService } from './inspeccionar.service';
import { HogarComponent } from './hogar/hogar.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { RouterModule, Routes } from '@angular/router';
import { QuienesSComponent } from './quienes-s/quienes-s.component';


/* Importamos las rutas que vamos a utilizar para los diferentes componentes */
const AppRoutes:Routes = [
 {path:'', component:HogarComponent},
 {path:'quienesS/:id', component:QuienesSComponent},
 {path:'Contactanos', component:ContactanosComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    VerPersonaComponent,
    HogarComponent,
    ContactanosComponent,
    QuienesSComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(AppRoutes) /*indicamos que utiizaremos las rutas que creamos en el paso anterior*/
  ],
  providers: [InspeccionarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
