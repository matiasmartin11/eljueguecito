import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JugadorComponent } from './component/jugadores/jugador/jugador.component';
import { ListaJugadoresComponent } from './component/jugadores/lista-jugadores/lista-jugadores.component';
import { InputJugadoresComponent } from './component/jugadores/input-jugadores/input-jugadores.component';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './pipes/custom.pipe';
import { JuegoComponent } from './component/juego/juego.component';
import { ZonaJuegoComponent } from './component/zona-juego/zona-juego.component';
import { TarjetaInformacionComponent } from './component/tarjeta-informacion/tarjeta-informacion.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadorComponent,
    ListaJugadoresComponent,
    InputJugadoresComponent,
    CustomPipe,
    JuegoComponent,
    ZonaJuegoComponent,
    TarjetaInformacionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
