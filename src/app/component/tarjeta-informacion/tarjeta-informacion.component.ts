import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tarjeta-informacion',
  templateUrl: './tarjeta-informacion.component.html',
  styleUrls: ['./tarjeta-informacion.component.css']
})
export class TarjetaInformacionComponent implements OnInit {
  @Output() mostrarTarjeta = new EventEmitter<boolean>();
  @Input() numeroGenerado!:number;
  titulo!:string;
  descripcion!:string;
  
  constructor() { }

  ngOnInit(): void {
    this.mostrarRespuesta();
  }

  continuar(){
    this.mostrarTarjeta.emit(false);
  }

  mostrarRespuesta(){
    switch (this.numeroGenerado) {
      case 1:
        this.titulo = "Mandar"
        this.descripcion = "Manda a beber a 1 persona"
        break;
      case 2:
        this.titulo = "Mandar"
        this.descripcion = "Manda a beber a 2 personas"
        break;
      case 3:
        this.titulo = "Permiso"
        this.descripcion = "Permiso para ir al baño/coger el móvil"
        break;
      case 4:
        this.titulo = "Tienes una norma"
        this.descripcion = "Elige una norma para el resto de la partida. Ej: no vale decir la palabra beber"
        break;
      case 5:
        this.titulo = "El jefe"
        this.descripcion = "Crea un gesto (algo que puedas hacer durante un rato). Puedes hacerlo tantas veces como quieras hasta que salga otro jefe. El último en imitarte bebe."
        break;
      case 6:
        this.titulo = "El chulo"
        this.descripcion = "Si no añades muletillas al hablar bebes. Ej: bro, hermana, socio... Termina cuando aparezca un nuevo chulo. "
        break; 
      case 7:
        this.titulo = "Juego del 7"
        this.descripcion = "Consiste en evitar el 7. Comienzas diciendo 1, el jugador de tu derecha dice dos, el siguiente tres... En los numeros que acaben en 7 o sean multiplos de 7 se da una palmada y se invierte el sentido."
        break;
      case 8:
        this.titulo = "La preguntona"
        this.descripcion = "Quien responda a tus preguntas bebe. Si te responden: 'preguntona' bebes tú."
        break;
      case 9:
        this.titulo = "Salta jugador"
        this.descripcion = "Buena suerte para la siguiente."
        break;
      case 10:
        this.titulo = "Cascada"
        this.descripcion = "Todos han de seguirte el ritmo en el próximo trago."
        break;
      default:
        break;
    }
  }
}
