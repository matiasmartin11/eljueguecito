import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IJugador } from 'src/model/interfaces/IJugador';

@Component({
  selector: 'app-zona-juego',
  templateUrl: './zona-juego.component.html',
  styleUrls: ['./zona-juego.component.css']
})
export class ZonaJuegoComponent implements OnInit {
  public numero:number;
  public turno: number;
  public desactivarBoton: boolean;
  public nombreClase:string;
  @Output() volver = new EventEmitter<boolean>();
  @Input() enPartida!:boolean;
  @Input() jugadorActual!:IJugador;
  @Output() siguienteJugador = new EventEmitter<void>();
  @Output() mostrarTarjeta = new EventEmitter<boolean>();
  @Output() numeroGenerado = new EventEmitter<number>();

  constructor() { 
    this.numero = 0;
    this.turno = 0;
    this.desactivarBoton = false;
    this.nombreClase = "";
  }

  ngOnInit(): void {
  }
  
  async clickJugar(){
    if(!this.desactivarBoton){
      for (let i = 0; i < 13; i++) {
        await this.delay(100).then(() =>this.numero = Math.trunc(Math.random()*10+1))
      }
      //generar numero aleatorio
      this.numero = Math.trunc(Math.random()*10+1);
      //efecto para h2 final
      this.nombreClase = "h2jump";
      //envia el numero generado a juego y luego a tarjeta informacion.
      this.numeroGenerado.emit(this.numero);
      //apaga el boton para evitar mas clicks innecesarios
      this.desactivarBoton = true;
      await this.delay(1500).then(()=>{
        //enciende el boton
        this.desactivarBoton = true;
        this.nombreClase = "";
        this.cambiarTurno();
        this.mostrarTarjetaInfo();
        });
   }
  }
  modificar= ()=> this.volver.emit(false);

  cambiarTurno = () => this.siguienteJugador.emit();

  mostrarTarjetaInfo(){
    this.mostrarTarjeta.emit();
  }
  
  delay(milliseconds : number) {
    return new Promise(resolve => setTimeout( resolve, milliseconds));
  }
}