import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HogarComponent } from '../hogar/hogar.component';

@Component({
  selector: 'app-quienes-s',
  templateUrl: './quienes-s.component.html',
  styleUrls: ['./quienes-s.component.css'],
})
export class QuienesSComponent {

  constructor(private router:Router){

  }

  VolverInicio(){
    this.router.navigate(['']);
  }


  ActualizarPersona(){

  }


}
