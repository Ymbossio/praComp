import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { VerPersonaComponent } from './ver-persona/ver-persona.component';
import { InspeccionarService } from './inspeccionar.service';

@NgModule({
  declarations: [
    AppComponent,
    VerPersonaComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [InspeccionarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
