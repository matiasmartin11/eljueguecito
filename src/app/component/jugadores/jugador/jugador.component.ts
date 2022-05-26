import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IJugador } from 'src/model/interfaces/IJugador';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  @Input() dataJugador!:IJugador;
  @Output() outputJugador = new EventEmitter<IJugador>();
  constructor() {
  }

  ngOnInit(): void {
  }
  
  enviarData(){
    this.outputJugador.emit(this.dataJugador);
  }
}
