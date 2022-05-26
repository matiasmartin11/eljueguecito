import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IJugador } from 'src/model/interfaces/IJugador';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-lista-jugadores',
  templateUrl: './lista-jugadores.component.html',
  styleUrls: ['./lista-jugadores.component.css']
})

export class ListaJugadoresComponent implements OnInit {

  @Input() jugadores!:IJugador[];
  @Input() enPartida:boolean;
  @Output() start = new EventEmitter<boolean>();
  @Output() actualizar = new EventEmitter<IJugador[]>();
  
  jugador!:IJugador;

  constructor(private ls: LocalStorageService) {
    this.enPartida = true;
  }

  ngOnInit(): void {
    
  }

  alta(info:any){
    this.actualizarId();
    let jugadorIntroducido = this. crearJugador(info.nombre, info.edad, this.jugadores.length);
    this.jugadores.push(jugadorIntroducido);
    this.ls.setLista(this.jugadores);
  }
  crearJugador(nombre:string, edad:string, id:number):IJugador{
    let jugadorIntroducido= {nombre, edad, id};
    return jugadorIntroducido; 
  }
  //agrega ID nuevos para evitar que haya ID repetidos al borrar y añadir.
  actualizarId(){
    this.jugadores.forEach((player, index) => player.id = index);
  }
  eliminar(dataJugador:any){
    //array de todos los jugadores que no tengan el id recibido por parametro;
    this.jugadores = this.jugadores.filter((jug:IJugador) => jug.id !== dataJugador.id);
    this.actualizar.emit(this.jugadores);
  }
  
  comenzar = () => this.jugadores.length>0 ? this.start.emit(true) : "";
}