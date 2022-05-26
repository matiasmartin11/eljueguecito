import { Component, Input, OnInit } from '@angular/core';
import { IJugador } from 'src/model/interfaces/IJugador';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  enPartida:boolean;
  @Input() listaJugadores:IJugador[];
  turno:number;
  jugadorActual:IJugador;
  mostrarTarjeta:boolean;
  numeroGenerado!:number;
  
  // jugadorActual!:IJugador;
  constructor(private ls:LocalStorageService) {
    this.enPartida = false;
    this.turno = 0;
    this.mostrarTarjeta = false;
    this.listaJugadores = [
      {
        nombre: "matias",
        edad: "21",
        id: 0
      },
      {
        nombre: "laura",
        edad: "20",
        id: 1
      }
    ];
    this.jugadorActual = this.listaJugadores[0];
   }
  
   ngOnInit(): void {
    console.log(this.ls.getLista());
    this.ls.getLista().length > 0 ? this.listaJugadores = this.ls.getLista(): this.ls.setLista(this.listaJugadores); 
  }
  actualizarLista(list:IJugador[]){
    this.ls.clear();
    this.ls.setLista(list);
    this.listaJugadores = this.ls.getLista();
  }
  //cambiar a zona-juego
  comenzarPartida(){
    this.enPartida = true;
  }
  //cambiar a lista-jugadores
  volver(){
    this.enPartida = false;
  }
  //siguiente jugador
  cambiarTurno(){
    this.turno < this.listaJugadores.length-1 ? this.turno+=1 : this.turno = 0;
    this.jugadorActual = this.listaJugadores[this.turno];
  } 
  //muestra la tarjeta cuando se activa el evento output mostrarTarjeta de tarjeta-informacion.ts
  cambiarMostrarTarjeta(){
    //toggle
    this.mostrarTarjeta = !this.mostrarTarjeta;
  }
  
  //recibe el numero Random desde zona-juego y lo envia a tarjeta-informacion
  actualizarNumeroGenerado(numeroRandom:any){
    console.log(numeroRandom);
    this.numeroGenerado = numeroRandom;
  }
}
