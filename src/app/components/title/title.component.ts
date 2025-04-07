import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
})
export class TitleComponent implements OnChanges{
  title = input.required<string>();

  // Método para verificar como se están modificando los datos del DOM mediante el lifecycle hook de onChanges
  ngOnChanges(changes: SimpleChanges) { // El Simple Changes recibe un objeto con todos los cambios

    console.log('ngOnChanges');

    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }
}
