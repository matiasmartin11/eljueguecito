import { Injectable } from '@angular/core';
import { IJugador } from 'src/model/interfaces/IJugador';

//este servicio permite que la lista persista al cerrar el navegador o actualizar la pagina.

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService{
  constructor() {}
  setLista(listaJugadores:IJugador []){
    try{
      localStorage.setItem("lista", JSON.stringify(listaJugadores))
    }catch(e){
      console.log(e);
    }
  }

  getLista(){
    try{
      return JSON.parse(localStorage.getItem("lista")|| '{}');
    }catch(e){
      console.log(e);
    }
  }
  clear():void{
    localStorage.clear();
  }
}
