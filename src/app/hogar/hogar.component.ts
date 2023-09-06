import { Component } from '@angular/core';
import { Personas } from '../persona.model';
import { InspeccionarService } from '../inspeccionar.service';

@Component({
  selector: 'app-hogar',
  templateUrl: './hogar.component.html',
  styleUrls: ['./hogar.component.css']
})
export class HogarComponent {


  title = 'praComp';

  
  persona: Personas[] = [
    new Personas('Juan', 'Perez'),
    new Personas('Laura', 'Juarez'),
    new Personas('Karla', 'Lara'),
  ];

  nombre: string='';
  apellido: string='';


  constructor (private alert: InspeccionarService){

  }

  agregarPersona(){
    let Nuevo = new Personas(this.nombre, this.apellido);
    this.alert.Alertando('desea agregar a la persona: '+this.nombre+' '+this.apellido);
    this.persona.push(Nuevo);
  }


}
