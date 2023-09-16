import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {

//Inyectamos Angular/Router para utilizar las rutas que hemops creado anteriormente
  constructor(private router:Router){

  }

  VolverInicio(){
    //aqui llamamos a la ruta
    this.router.navigate(['']);

  }
}
