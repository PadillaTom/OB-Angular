import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss'],
})
export class SaludoComponent implements OnInit, OnChanges, OnDestroy {
  // Variables:
  @Input() usuario: string = 'default';
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter();

  myStyles: object = {
    color: 'cyan',
    fontSize: '2rem',
  };

  // Constructor:
  constructor() {}

  ngOnInit(): void {
    console.log('[Saludo] onInit()');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[Saludo] onChanges(): ', changes.usuario.currentValue);
  }

  ngOnDestroy(): void {
    console.log('[Saludo] onDestroy()');
  }

  // ==== Methods ===

  /*
   * Emitter del Output al Componente de orden superior
   */
  enviarMensajeAlPadre(): void {
    this.mensajeEmitter.emit(`Hola, ${this.usuario}. Desde Saludo Component`);
  }

  //  == Notas ==
  /* Components Lifecyle -> Mas importantes **
  1. ngOnChanges                **
  2. ngOnInit                   **
  3. ngAfterContentInit
  4. ngAfterContentChecked
  5. ngAfterViewInit
  6. ngAfterViewChecked
  7. ngAfterContentChecked
  8. ngAfterViewChecked
  9. ngOnDestroy                **
  */
}
