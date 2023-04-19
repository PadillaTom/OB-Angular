import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hola Mundo';
  inputUsuario = '';

  /*
   * Ejecutado cuando haya un MensajeEmitter
   */
  recibirMensajeHijo(evento: string) {
    alert(evento);
  }
}
