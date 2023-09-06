import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InspeccionarService {

  constructor() { }

  Alertando(mensaje: string){
    alert(mensaje);
  }

}
