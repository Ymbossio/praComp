import { Component, Input } from '@angular/core';
import { InspeccionarService } from '../inspeccionar.service';


@Component({
  selector: 'app-ver-persona',
  templateUrl: './ver-persona.component.html',
  styleUrls: ['./ver-persona.component.css'],
  providers: []
})
export class VerPersonaComponent  {
/* Recibimos las variable que nos mandan por parametro desde el otro componente */
@Input()Pnombre: string='';
@Input()apellido: string='';
}
