import { afterNextRender, afterRender, Component, effect, OnInit, signal } from '@angular/core';
import { TitleComponent } from '../../../components/title/title.component';

const log = (...messages: string[]) => {
  console.log(
    `${ messages[0] } %c${ messages.slice(1).join(`, `) }`,
    'color: #bada55'
  );
}


@Component({
  selector: 'app-home-page',
  imports: [
    TitleComponent
  ],
  templateUrl: './home-page.component.html',
})

//Para forzar a que nuestro componente tenga un lifecyle hook hay que implementarlo (Ejm: onInit)
export class HomePageComponent implements OnInit{

  traditionalProperty = 'Alan';
  signalProperty = signal<string>('Alan');

  changeTraditional() {
    this.traditionalProperty = 'Alan González';
  }
  changeSignal() {
    this.signalProperty.set('Alan González');
  }

  // Los Lifecycle hooks son simples metodos que se llaman en un momento determinado del tiempo.
  // Es importante crear los metodos con los nombres específicos.

  //----------------Creation-------------------
  constructor(){
    log(
      "constructor",
      "Se ejecuta cuando Angular instancia el componente.")
  }

  //----------------Básico-------------------

  basicEffect = effect(() => {
    log('effect', 'Disparar efectos secundarios');
  })
  basicCleanUpEffect = effect( (onCleanup) => {
    log('effectToClean', 'Disparar efecto a limpiar');

    onCleanup(() => {
      log('onCleanUp', 'Se ejecuta cuando un efecto se va a destruir');
    });
  })

//----------------Rendering-------------------
  ngOnInit() {
    log(
      "ngOnInit",
      "Se ejecuta una vez después de que Angular haya inicializado todas las entradas del componente."
    );
  }
  ngOnChanges() {
    log(
      "ngOnChanges",
      "Se ejecuta cada vez que cambian las entradas del componente."
    );
  }
  ngDoCheck() {
    log(
      "ngDoCheck",
      "Se ejecuta cada vez que se comprueba si hay cambios en este componente."
    );
  }
  ngAfterContentInit() {
    log(
      "ngAfterContentInit",
      "Se ejecuta una vez después de que se haya inicializado el contenido del componente."
    );
  }
  ngAfterContentChecked() {
    log(
      "ngAfterContentChecked",
      "Se ejecuta cada vez que se verifica si se han producido cambios en el contenido de este componente."
    );
  }
  ngAfterViewInit() {
    log(
      "ngAfterViewInit",
      "Se ejecuta una vez después de que se haya inicializado la vista del componente."
    );
  }
  ngAfterViewChecked() {
    log(
      "ngAfterViewChecked",
      "Se ejecuta cada vez que se verifica si hay cambios en la vista del componente."
    );
  }
  //----------------Rendering-------------------
  afterNextRenderEffect = afterNextRender(() => {
    log('afterNextRender', "Se ejecuta UNA VEZ cuando todos los componentes se hayan representado en el DOM.")
  });

  afterRenderEffect = afterRender(() => {
    log(
      "afterRender",
      "Se ejecuta CADA VEZ que todos los componentes se han representado en el DOM."
    );
  })
  //----------------Destruction-------------------
  // Es vital
  ngOnDestroy() {
    log(
      "ngOnDestroy",
      "Se ejecuta una vez antes de que se destruya el componente."
    );
  }




 }
